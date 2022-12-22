import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-mejoradores',
  templateUrl: './mejoradores.page.html',
  styleUrls: ['./mejoradores.page.scss'],
})
export class MejoradoresPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
