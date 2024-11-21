import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ParametersUrl } from '../models/Parameter.model';
import logger from '../shared/utils/logger';
import { Filtro } from '../models/Filter.model';
import dayjs from 'dayjs';

const URL_PRODUCTO = `${environment.apiUrl}productos`;
@Injectable({
  providedIn: 'root',
})
export class HelpersService {
  headerJson_Token(): HttpHeaders {
    let config = {
      'Content-Type': 'application/json',
    };

    return new HttpHeaders(config);
  }

  // public methods
  formatParameters(parametersURL: ParametersUrl): HttpParams {
    let params = new HttpParams();
    Object.entries(parametersURL).forEach(([key, value]) => {
      // logger.log([key, value]);
      // Solo agregar valores que no sean undefined o null
      if (value && key != 'link') {
        params = params.set(key, value);
      }
    });
    return params;
  }

  filterData(filtros: Filtro) {
    const newFiltros = Object.entries(filtros)
      .filter(([key, value]) => this.excludeInFilter(key, value, filtros)) // Pasar el objeto completo para procesar fecha
      .reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {});

    return newFiltros;
  }

  private excludeInFilter(key: string, value: any, filtros: Filtro): boolean {
    const exclusionRules: Record<string, any> = {
      estado: 2,
      local_id: 0,
    };

    // Reemplazar valores de dateIni y dateFin si existe fecha
    if (key === 'fecha' && filtros.fecha?.startDate && filtros.fecha?.endDate) {
      filtros.dateIni = dayjs(filtros.fecha.startDate).format('YYYY-MM-DD');
      filtros.dateFin = dayjs(filtros.fecha.endDate).format('YYYY-MM-DD');
      return false; // Excluir el campo `fecha`
    }

    // Excluir claves según las reglas definidas
    if (exclusionRules[key] !== undefined && value === exclusionRules[key]) {
      return false;
    }

    // Incluir claves con valores no vacíos
    return value !== '';
  }
}
