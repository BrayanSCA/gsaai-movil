import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-finalidad',
  templateUrl: './finalidad.page.html',
  styleUrls: ['./finalidad.page.scss'],
})
export class FinalidadPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
