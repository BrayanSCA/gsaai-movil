import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-zona',
  templateUrl: './modif-zona.page.html',
  styleUrls: ['./modif-zona.page.scss'],
})
export class ModifZonaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
