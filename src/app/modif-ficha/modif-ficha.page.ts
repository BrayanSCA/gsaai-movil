import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import UsuarioData from '../datos/usuario/usuariodata';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-modif-ficha',
  templateUrl: './modif-ficha.page.html',
  styleUrls: ['./modif-ficha.page.scss'],
})
export class ModifFichaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  fecha:any;
  cod_ficha:any;
  nom_ficha:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conexionService: ConexionService
  ) {
    this.route.params.subscribe((param:any)=>{
      this.cod_ficha=param.cod_ficha;
      console.log(this.cod_ficha);
      this.verFicha(this.cod_ficha);
    })
   }

  ngOnInit() {
  }

  verFicha(cod_ficha:any){
    this.conexionService.verFicha(cod_ficha).subscribe((res:any)=> {
      console.log('SUCCESS', res);
      let ficha = res[0];
      this.fecha = ficha.fecha;
      this.cod_ficha = ficha.cod_ficha;
      this.nom_ficha = ficha.nom_ficha;
    },(error:any)=> {
      console.log('ERROR',error)
    })
  }

}
