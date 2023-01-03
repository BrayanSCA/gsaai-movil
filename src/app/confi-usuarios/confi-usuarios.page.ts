import { Component, OnInit } from '@angular/core';
import { FichaService } from '../datos/usuario/ficha.service';
import { RoldataService } from '../datos/usuario/roldata.service';
import { UsuarioService } from '../datos/usuario/usuario.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-confi-usuarios',
  templateUrl: './confi-usuarios.page.html',
  styleUrls: ['./confi-usuarios.page.scss'],
})
export class ConfiUsuariosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(
    public usuarioservice: UsuarioService
    ) {}

  ngOnInit() {
    this.usuarioservice.obtenerUsuarios()
  }

  eliminarUsuario(di: string) {
    this.usuarioservice.eliminarUsuario(di)
  }
}
