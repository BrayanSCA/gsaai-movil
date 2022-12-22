import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-procedencias',
  templateUrl: './modif-procedencias.page.html',
  styleUrls: ['./modif-procedencias.page.scss'],
})
export class ModifProcedenciasPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
