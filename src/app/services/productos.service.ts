import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Producto } from '../models/Producto.model';
import { Listado } from '../models/Listados.model';

const URL = `${environment.apiUrl}productos`;
export type ProductoResponse = Producto[] | Listado<Producto>;

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  // constructor(private http: HttpClient) {}
  private http = inject(HttpClient);

  headerJson_Token(): HttpHeaders {
    // const DataUSerStorage = this.authService.getAuthFromLocalStorage()

    let config = {
      'Content-Type': 'application/json',
      // 'Authorization' : `bearer ${DataUSerStorage? DataUSerStorage?.access_token: "" }`
      // Authorization: `bearer 5|ufVCfCDIiqn1vKWJM8mKUx77a1zauTK1KcdzNdRV`,
    };

    return new HttpHeaders(config);
  }

  // public methods
  getProductos(): Observable<any> {
    return this.http.get<any>(URL, {
      // headers: this.headerJson_Token(),
      responseType: 'json',
    });
  }
}
