import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = `${environment.apiUrl}/clientes`;  // Ajusta según el endpoint correcto
  private readonly API_URL2 = `${environment.apiUrl}/coaches`;  // Ajusta según el endpoint correcto
  private readonly API_URL3 = `${environment.apiUrl}/membresias`;  // Ajusta según el endpoint correcto
  private readonly API_URL4 = `${environment.apiUrl}/clases`;  // Ajusta según el endpoint correcto
  private readonly API_URL5 = `${environment.apiUrl}/asistencias`;  // Ajusta según el endpoint correcto
  private readonly API_URL6 = `${environment.apiUrl}/gym`;  // Ajusta según el endpoint correcto
  private readonly API_URL7 = `${environment.apiUrl}/equipos`;  // Ajusta según el endpoint correcto


  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(this.API_URL);
  }

  getCoaches(): Observable<any> {
    return this.http.get(this.API_URL2);
  }

  getMmebresias(): Observable<any> {
    return this.http.get(this.API_URL3);
  }

  getClases(): Observable<any> {
    return this.http.get(this.API_URL4);
  }

  getAsistencias(): Observable<any> {
    return this.http.get(this.API_URL5);
  }

  getGym(): Observable<any> {
    return this.http.get(this.API_URL6);
  }
  
  getEquipos(): Observable<any> {
    return this.http.get(this.API_URL7);
  }
}