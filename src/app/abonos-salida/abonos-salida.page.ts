import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-abonos-salida',
  templateUrl: './abonos-salida.page.html',
  styleUrls: ['./abonos-salida.page.scss'],
})
export class AbonosSalidaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
