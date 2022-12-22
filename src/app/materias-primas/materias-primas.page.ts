import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-materias-primas',
  templateUrl: './materias-primas.page.html',
  styleUrls: ['./materias-primas.page.scss'],
})
export class MateriasPrimasPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
