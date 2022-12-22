import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../services/conexion.service';
import UsuarioData from '../datos/usuario/usuariodata'
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-modulos',
  templateUrl: './modulos.page.html',
  styleUrls: ['./modulos.page.scss'],
})
export class ModulosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(public conexion:ConexionService, private navController: NavController,) { }

  ngOnInit() {
    
  /*   this.verDatos() */
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

/*   verDatos(){
    this.conexion.detalleUsuarios().subscribe(
      data=> {this.usuarios = data},
      error=>{console.log(error)}
    )
  } */
}
