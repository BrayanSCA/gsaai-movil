import { Component, OnInit } from '@angular/core';
import usuariodata from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-historial-pila',
  templateUrl: './historial-pila.page.html',
  styleUrls: ['./historial-pila.page.scss'],
})
export class HistorialPilaPage implements OnInit {
  usuarioObservable = usuariodata.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
