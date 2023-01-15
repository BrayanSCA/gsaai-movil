import { Component, OnInit } from '@angular/core';
import { RoldataService } from '../datos/usuario/roldata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver();

  constructor(
    public roldataservice: RoldataService
    ) {}

  ngOnInit() {
    this.roldataservice.obtenerRoles()
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  eliminarRol(cod_rol: string) {
    this.roldataservice.eliminarRol(cod_rol)
  }
}
