import { Component, inject, input } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.html',
  styleUrl: './user-item.css',
})
export class UserItem {
  data = input<Usuario>();
  usuarioService = inject(UsuarioService);

  DeleteUser(){
    this.usuarioService.deleteUsuario(this.data()!._id).subscribe((user) => {})
    alert("Something should happen here");
  }
}
