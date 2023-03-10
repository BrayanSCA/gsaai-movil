import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import UsuarioData from '../datos/usuario/usuariodata'

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.page.html',
  styleUrls: ['./modulos.page.scss'],
})

export class ModulosPage implements OnInit  {
  usuarioObservable=UsuarioData.getUsuarioObserver();

  constructor(
    public conexion:ConexionService
    ) { }

  ngOnInit() {
    this.permisoAdmin()

  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  permisoAdmin(){
    if (UsuarioData.getUsuario().rol === 1)
      UsuarioData.permisosUsuario(true)
  }

}
