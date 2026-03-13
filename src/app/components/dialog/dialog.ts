import { Component, ElementRef, inject, input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-dialog',
  imports: [FormsModule],
  templateUrl: './dialog.html',
  styleUrl: './dialog.css',
})
export class Dialog {

  usuarioService = inject(UsuarioService);

  name:string = "";
  email:string = "";
  password:string = "";

  idOrganizacion = input<string>();
  onSaveClick() {
    console.log('Hola desde un modal');
  }

  @ViewChild('dialog') dialog!: ElementRef;
  OpenDialog(){
    this.dialog.nativeElement.showModal();
  }

  closeDialog() {
    this.dialog.nativeElement.close();
  }

  onSaveBtnClick(){
    
    // let nuevo : Usuario ={
    //   name: this.name,
    //   email: this.email,
    //   password: this.password,
    //   organizacion:this.idOrganizacion()!
    // };

    this.usuarioService.createUsuario(this.name,this.email,this.password,this.idOrganizacion()!).subscribe((res)=>{})
    this.closeDialog();
  }
}
