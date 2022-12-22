import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-mejoradores',
  templateUrl: './modif-mejoradores.page.html',
  styleUrls: ['./modif-mejoradores.page.scss'],
})
export class ModifMejoradoresPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
