import { Component, OnInit } from '@angular/core';
import UsuarioData from '../datos/usuario/usuariodata';
import { ConexionService } from '../services/conexion.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.page.html',
  styleUrls: ['./fichas.page.scss'],
})
export class FichasPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver();
  fecha:any;
  cod_ficha:any;
  nom_ficha:any;
  fichas:any = [];

  constructor(public conexionService:ConexionService) { 
    this.verFichas();
  }

  ngOnInit() {
  }

  enviarDatos(){
    let data = {
      fecha: this.fecha,
      cod_ficha: this.cod_ficha,
      nom_ficha: this.nom_ficha,
    }
    this.conexionService.enviarDatos(data).subscribe((res:any)=>{
      console.log("SUCCESS ===",res);
      this.fecha = '';
      this.cod_ficha = '';
      this.nom_ficha = '';
      alert('Ficha ingresada correctamente');
      this.verFichas();
    },(error: any)=>{
      console.log("ERROR ===",error);
    })
  }

  verFichas(){
    this.conexionService.verFichas().subscribe((res:any)=>{
      console.log("SUCCESS ===", res);
      this.fichas = res;
    },(error:any)=> {
      console.log("ERROR ===",error);
    })
  }

  eliminarFicha(cod_ficha:any){
    this.conexionService.eliminarFicha(cod_ficha).subscribe((res:any)=>{
      console.log('SUCCESS');
      this.verFichas();
    },(error:any)=> {
      console.log('ERROR')
    })
  }
}
