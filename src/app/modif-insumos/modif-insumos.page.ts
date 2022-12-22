import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-insumos',
  templateUrl: './modif-insumos.page.html',
  styleUrls: ['./modif-insumos.page.scss'],
})
export class ModifInsumosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
