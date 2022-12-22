import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';


@Component({
  selector: 'app-actividades-secun',
  templateUrl: './actividades-secun.page.html',
  styleUrls: ['./actividades-secun.page.scss'],
})
export class ActividadesSecunPage implements OnInit {
  
usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor() { }

  ngOnInit() {
  }

}
