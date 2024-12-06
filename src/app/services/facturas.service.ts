import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Factura } from '../models/Factura.model';
import { Listado } from '../models/Listados.model';
import { HelpersService } from './helpers.service';
import { ParametersUrl } from '../models/Parameter.model';
import logger from '../shared/utils/logger';

const URL_Factura = `${environment.apiUrl}Factura`;
export type FacturaResponse = Factura[] | Listado<Factura>;

@Injectable({
  providedIn: 'root',
})
export class FacturasService {
  // constructor(private http: HttpClient) {}
  private http = inject(HttpClient);
  private _Helpers = inject(HelpersService);

  // public methods
  getFacturas(parametersURL: ParametersUrl): Observable<any> {
    let URL = parametersURL.link ? parametersURL.link : URL_Factura;
    logger.log(URL, parametersURL);
    return this.http.get<any>(URL, {
      params: this._Helpers.formatParameters(parametersURL),
      responseType: 'json',
    });
  }

  getFacturaById(id: number): Observable<any> {
    return this.http.get<any>(`${URL_Factura}/${id}`, {
      responseType: 'json',
    });
  }

  deleteFactura(id: number): Observable<any> {
    return this.http.delete<any>(`${URL_Factura}/${id}`, {
      responseType: 'json',
    });
  }

  updateFactura(Id: number, Factura: Factura): Observable<any> {
    return this.http.put<Factura>(
      `${URL_Factura}/${Id}`,
      { ...Factura },
      {
        responseType: 'json',
      }
    );
  }

  createFactura(Factura: Factura): Observable<any> {
    return this.http.post<Factura>(
      `${URL_Factura}`,
      { ...Factura },
      {
        responseType: 'json',
      }
    );
  }
}
