import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-cp-actualizar',
  templateUrl: './cp-actualizar.page.html',
  styleUrls: ['./cp-actualizar.page.scss'],
})
export class CpActualizarPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
