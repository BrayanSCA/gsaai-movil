import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-usuarios',
  templateUrl: './modif-usuarios.page.html',
  styleUrls: ['./modif-usuarios.page.scss'],
})
export class ModifUsuariosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
