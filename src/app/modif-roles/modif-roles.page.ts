import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-roles',
  templateUrl: './modif-roles.page.html',
  styleUrls: ['./modif-roles.page.scss'],
})
export class ModifRolesPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
