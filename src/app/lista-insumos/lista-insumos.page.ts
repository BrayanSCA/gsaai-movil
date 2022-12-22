import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-lista-insumos',
  templateUrl: './lista-insumos.page.html',
  styleUrls: ['./lista-insumos.page.scss'],
})
export class ListaInsumosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
