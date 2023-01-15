import { Component, OnInit } from '@angular/core';
import usuariodata from '../datos/usuario/usuariodata';
import { PilaActualizarService } from '../datos/funciones/pilaactualizar.service';
import { ActivatedRoute } from '@angular/router';
import { ZonasService } from '../datos/funciones/zonas.service';

@Component({
  selector: 'app-historial-pila',
  templateUrl: './historial-pila.page.html',
  styleUrls: ['./historial-pila.page.scss'],
})
export class HistorialPilaPage implements OnInit {
  usuarioObservable = usuariodata.getUsuarioObserver()
  cod_zona: any;
 

  constructor(
    private route: ActivatedRoute,
   
    public zonasService: ZonasService,
    public pilaActualizarService: PilaActualizarService
  ) {


    this.route.params.subscribe((param: any) => {
      this.cod_zona = param.cod_zona;
      console.log("prum",this.cod_zona)      
    })
  
  }
  ngOnInit() {
    this.zonasService.obtenerZonasFull();
  }

  cerrarSesion(){
    usuariodata.cerrarsesion()
  }
}
