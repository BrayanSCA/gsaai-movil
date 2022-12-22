import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';


@Component({
  selector: 'app-cp-combinar',
  templateUrl: './cp-combinar.page.html',
  styleUrls: ['./cp-combinar.page.scss'],
})
export class CpCombinarPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
