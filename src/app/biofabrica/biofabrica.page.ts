import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata'

@Component({
  selector: 'app-biofabrica',
  templateUrl: './biofabrica.page.html',
  styleUrls: ['./biofabrica.page.scss'],
})
export class BiofabricaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
