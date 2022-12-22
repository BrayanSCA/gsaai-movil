import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-tipo-insu',
  templateUrl: './modif-tipo-insu.page.html',
  styleUrls: ['./modif-tipo-insu.page.scss'],
})
export class ModifTipoInsuPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
