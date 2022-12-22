import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';


@Component({
  selector: 'app-tipo-insumos',
  templateUrl: './tipo-insumos.page.html',
  styleUrls: ['./tipo-insumos.page.scss'],
})
export class TipoInsumosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
