import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-confi-usuarios',
  templateUrl: './confi-usuarios.page.html',
  styleUrls: ['./confi-usuarios.page.scss'],
})
export class ConfiUsuariosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  FormularioRegistro: FormGroup;

  constructor(public fb: FormBuilder) {
    this.FormularioRegistro = this.fb.group({
      'documento': new FormControl("",Validators.required),
      'nombres': new FormControl("",Validators.required),
      'apellidos': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'contraseña': new FormControl("",Validators.required),
      'rol': new FormControl("",Validators.required),
      'ficha': new FormControl("",Validators.required)
    });
 

   }

  ngOnInit() {
  }

}
