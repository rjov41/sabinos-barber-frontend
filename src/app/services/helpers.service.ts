import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { ParametersUrl } from '../models/Parameter.model';

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
      // Solo agregar valores que no sean undefined o null
      if (value !== undefined && value !== null && key == 'link') {
        params = params.set(key, value);
      }
    });

    return params;
  }
}
