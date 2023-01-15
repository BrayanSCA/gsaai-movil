import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-confi-perfil',
  templateUrl: './confi-perfil.page.html',
  styleUrls: ['./confi-perfil.page.scss'],
})
export class ConfiPerfilPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }
}
