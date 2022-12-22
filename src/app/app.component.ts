import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import UsuarioData from '../app/datos/usuario/usuariodata'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent  {
  constructor(private platform:Platform, private navController:NavController) {
    
    this.platform.ready().then(()=>{UsuarioData.getUsuarioObserver().subscribe(usuario=>{
      if(usuario.login){
        this.navController.navigateRoot(['modulos'])
      }else{
        this.navController.navigateRoot(['login'])
      }
    })})
  }


}

/* implements OnInit */