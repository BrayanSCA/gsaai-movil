import { Component, OnInit } from '@angular/core';
import { MejoradorService } from '../datos/usuario/mejoradordata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-mejoradores',
  templateUrl: './mejoradores.page.html',
  styleUrls: ['./mejoradores.page.scss'],
})
export class MejoradoresPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(
    public mejoradordataservice: MejoradorService
  ) { }

  ngOnInit() {
    this.mejoradordataservice.obtenerMejoradores()
  }

  eliminarMejorador(cod_mejorador: string) {
    this.mejoradordataservice.eliminarMejorador(cod_mejorador)
  }
}
