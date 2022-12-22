import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.page.html',
  styleUrls: ['./roles.page.scss'],
})
export class RolesPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()

  constructor(private router: Router) { }

  ngOnInit() {

  }

}
