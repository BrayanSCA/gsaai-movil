import { Component, OnInit } from '@angular/core';
import { SecundariaService } from '../datos/usuario/actisecundata.service';
import UsuarioData from '../datos/usuario/usuariodata';


@Component({
  selector: 'app-actividades-secun',
  templateUrl: './actividades-secun.page.html',
  styleUrls: ['./actividades-secun.page.scss'],
})
export class ActividadesSecunPage implements OnInit {
  
usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(
    public actisecundataservice: SecundariaService
  ) { }

  ngOnInit() {
    this.actisecundataservice.obtenerSecundarias()
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  eliminarSecundaria(cod_secund: string) {
    this.actisecundataservice.eliminarSecundaria(cod_secund)
  }
}
