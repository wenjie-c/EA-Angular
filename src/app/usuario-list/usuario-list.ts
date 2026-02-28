import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../posts/api.service';
import { Usuario } from '../models/usuario.model';
import { Organizacion } from '../models/organizacion.model';

@Component({
  selector: 'app-usuario-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuario-list.html',
  styleUrls: ['./usuario-list.css'],
})
export class UsuarioList implements OnInit {
  usuarios: Usuario[] = [];
  loading = false;
  errorMsg = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.errorMsg = '';

    this.api.getUsuarios().subscribe({
      next: (res) => {
        this.usuarios = res?.usuarios ?? [];
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'No se han podido cargar los usuarios.';
        this.loading = false;
      },
    });
  }

  trackById(_index: number, u: Usuario): string {
    return u._id;
  }

  organizacionLabel(u: Usuario): string {
    const org = u.organizacion;
    if (!org) return '-';
    if (typeof org === 'string') return org; 
    return (org as Organizacion).name ?? '-';
  }
}