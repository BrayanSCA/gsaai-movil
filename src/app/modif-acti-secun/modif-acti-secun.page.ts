import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-acti-secun',
  templateUrl: './modif-acti-secun.page.html',
  styleUrls: ['./modif-acti-secun.page.scss'],
})
export class ModifActiSecunPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
