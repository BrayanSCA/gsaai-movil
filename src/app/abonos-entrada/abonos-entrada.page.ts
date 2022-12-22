import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-abonos-entrada',
  templateUrl: './abonos-entrada.page.html',
  styleUrls: ['./abonos-entrada.page.scss'],
})
export class AbonosEntradaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  constructor() { }

  ngOnInit() {
  }

}
