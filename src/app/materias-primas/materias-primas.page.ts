import { Component, OnInit } from '@angular/core';
import { MpService } from '../datos/usuario/mpdata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-materias-primas',
  templateUrl: './materias-primas.page.html',
  styleUrls: ['./materias-primas.page.scss'],
})
export class MateriasPrimasPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(
    public mpdataservice: MpService
  ) { }

  ngOnInit() {
    this.mpdataservice.obtenerMps();
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  eliminarMp(cod_mp: string){
    this.mpdataservice.eliminarMp(cod_mp)
  }
}
