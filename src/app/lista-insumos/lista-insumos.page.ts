import { Component, OnInit } from '@angular/core';
import { InsumoService } from '../datos/usuario/insumodata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-lista-insumos',
  templateUrl: './lista-insumos.page.html',
  styleUrls: ['./lista-insumos.page.scss'],
})
export class ListaInsumosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(
    public insumodataservice: InsumoService
  ) { }

  ngOnInit() {
    this.insumodataservice.obtenerInsumos();
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  eliminarInsumo(cod_insumo: string) {
    this.insumodataservice.eliminarInsumo(cod_insumo)
  }
}
