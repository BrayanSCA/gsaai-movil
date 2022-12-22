import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-materias-p',
  templateUrl: './modif-materias-p.page.html',
  styleUrls: ['./modif-materias-p.page.scss'],
})
export class ModifMateriasPPage implements OnInit {
usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
