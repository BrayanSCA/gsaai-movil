import { Component, OnInit } from '@angular/core';
import { ProcedenciaService } from '../datos/usuario/procedenciadata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-procedencias',
  templateUrl: './procedencias.page.html',
  styleUrls: ['./procedencias.page.scss'],
})
export class ProcedenciasPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(
    public procedenciadataservice: ProcedenciaService
  ) { }

  ngOnInit() {
    this.procedenciadataservice.obtenerProcedencias();
    console.log(this.procedenciadataservice.obtenerProcedencias())
  }

  eliminarProcedencia(cod_procedencia:string) {
    this.procedenciadataservice.eliminarProcedencia(cod_procedencia)
  }

}
