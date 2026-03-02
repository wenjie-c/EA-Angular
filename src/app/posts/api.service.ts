import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Organizacion } from '../models/organizacion.model';
import { Usuario } from '../models/usuario.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // =========================
  // ORGANIZACIONES
  // =========================

  getOrganizaciones(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/organizaciones`
    );
  }

  getOrganizacionById(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/organizaciones/${id}`
    );
  }

  createOrganizacion(name: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/organizaciones`,
      { name }
    );
  }

  updateOrganizacion(id: string, name: string): Observable<any> {
    return this.http.patch(
      `${this.baseUrl}/organizaciones/${id}`,
      { name }
    );
  }

  deleteOrganizacion(id: string): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}/organizaciones/${id}`
    );
  }

  // =========================
  // USUARIOS
  // =========================

  getUsuarios(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/usuarios`
    );
  }

  getUsuarioById(id: string): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/usuarios/${id}`
    );
  }

  createUsuario(name: string, organizacion: string): Observable<any> {
    return this.http.post(
      `${this.baseUrl}/usuarios`,
      { name, organizacion }
    );
  }

  updateUsuario(id: string, name: string, organizacion: string): Observable<any> {
    return this.http.patch(
      `${this.baseUrl}/usuarios/${id}`,
      { name, organizacion }
    );
  }

  deleteUsuario(id: string): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}/usuarios/${id}`
    );
  }
}