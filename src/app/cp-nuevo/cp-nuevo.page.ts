import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-cp-nuevo',
  templateUrl: './cp-nuevo.page.html',
  styleUrls: ['./cp-nuevo.page.scss'],
})
export class CpNuevoPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
