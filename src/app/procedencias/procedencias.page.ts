import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-procedencias',
  templateUrl: './procedencias.page.html',
  styleUrls: ['./procedencias.page.scss'],
})
export class ProcedenciasPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
