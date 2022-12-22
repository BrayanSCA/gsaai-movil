import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-ficha',
  templateUrl: './modif-ficha.page.html',
  styleUrls: ['./modif-ficha.page.scss'],
})
export class ModifFichaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
