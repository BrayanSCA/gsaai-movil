import { Component, OnInit } from '@angular/core';
import { FichaService } from '../datos/usuario/ficha.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.page.html',
  styleUrls: ['./fichas.page.scss'],
})
export class FichasPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver();

  constructor(
    public fichaservice: FichaService) {
  }

  ngOnInit() {
    this.fichaservice.obtenerFichas();
  }

  eliminarFicha(cod_ficha: string) {
    this.fichaservice.eliminarFicha(cod_ficha)
  }
}
