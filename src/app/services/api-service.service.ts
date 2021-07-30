import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  apiUrl = "https://toki.com.co/api/v1/";
  headers = new HttpHeaders().set("secret", "ykZGMDWOL5CyCzUbWcsRCNyKrytH2Ib-")
  limit = '20';
  page = '1';
  id = '1';

  getRestaurants(limit, page): Observable<any> {
    return this._http.get(`${this.apiUrl}branches?lat=4.6556383&lng=-74.1249087&limit=${limit}&page=${page}`,
      { headers: this.headers }
    );
  }

  getProducts(id): Observable<any> {
    return this._http.get(`${this.apiUrl}branches/${id}/products`,
      { headers: this.headers }
    );
  }

  getExtras(id): Observable<any> {
    return this._http.get(`${this.apiUrl}products/${id}/extras`,
      { headers: this.headers }
    );
  }

  constructor(
    private _http: HttpClient
  ) { }
}
