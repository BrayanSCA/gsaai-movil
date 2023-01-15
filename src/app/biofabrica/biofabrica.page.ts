import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata'
import { ZonaService } from '../datos/usuario/zonadata.service';

@Component({
  selector: 'app-biofabrica',
  templateUrl: './biofabrica.page.html',
  styleUrls: ['./biofabrica.page.scss'],
})
export class BiofabricaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(
    public zonaservice: ZonaService
  ) { }

  ngOnInit() {
    this.zonaservice.obtenerZonas();
  }
  
  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

}
