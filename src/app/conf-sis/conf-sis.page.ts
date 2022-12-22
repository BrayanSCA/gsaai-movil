import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-conf-sis',
  templateUrl: './conf-sis.page.html',
  styleUrls: ['./conf-sis.page.scss'],
})
export class ConfSisPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
