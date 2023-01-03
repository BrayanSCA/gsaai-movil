import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from '../services/conexion.service';
import { Iloginform } from './models/datos';
import UsuarioData from '../datos/usuario/usuariodata'




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private conexion: ConexionService) {
  }

  ngOnInit() {
  }
  form = new FormGroup({
    documento: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required])
  })

  //función para el botón ingresar
  onSubmit() {
    const { documento, contrasena } = this.form.value as Iloginform

    this.conexion.consultaDatos(documento, contrasena).subscribe(
      data => {
        const usuario = data.usuario
        UsuarioData.iniciarSesion({ ...usuario, login: true })
      }, error => { console.log(error) }
    )
  }
}