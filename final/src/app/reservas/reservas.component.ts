import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  private url = 'https://allramos.github.io/desenvolvimento-web/lista-reservas.json';

  constructor(private http: HttpClient) { }

  getReservas() {
    return this.http.get(this.url);
  }
}