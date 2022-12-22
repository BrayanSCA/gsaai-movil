import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';


@Component({
  selector: 'app-bitacoras',
  templateUrl: './bitacoras.page.html',
  styleUrls: ['./bitacoras.page.scss'],
})
export class BitacorasPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
