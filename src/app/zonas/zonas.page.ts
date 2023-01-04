import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';
import { ZonaService } from '../datos/usuario/zonadata.service';


@Component({
  selector: 'app-zonas',
  templateUrl: './zonas.page.html',
  styleUrls: ['./zonas.page.scss'],
})
export class ZonasPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(
    public zonaservice: ZonaService
  ) { }

  ngOnInit() {
    this.zonaservice.obtenerZonas();
  }

  eliminarZona(cod_zona:string){
    this.zonaservice.eliminarZona(cod_zona)
  }

}
