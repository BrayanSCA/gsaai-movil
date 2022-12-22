import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-mp-entrada',
  templateUrl: './mp-entrada.page.html',
  styleUrls: ['./mp-entrada.page.scss'],
})
export class MpEntradaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
