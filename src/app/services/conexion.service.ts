import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  
  url="http://127.0.0.1:80"

  constructor(public http:HttpClient) { }

  consultaDatos(documento:string, contrasena:any):Observable<any>{
    const body = JSON.stringify({documento, contrasena})
    return this.http.post(this.url+`/consultaUsuarios.php`,body);
  }

  enviarDatos(data:any):Observable<any>{
    return this.http.post(this.url+`/fichaCreate.php`,data); //, {responseType: 'json'}
  }

  verFichas(){
    return this.http.get(this.url+`/fichaRead.php`);
  }

  eliminarFicha(cod_ficha:any){
    return this.http.delete(this.url+'/fichaDelete.php?cod_ficha='+cod_ficha);
  }

  verFicha(cod_ficha:any){
    return this.http.get(this.url+'/fichaGet.php?cod_ficha='+cod_ficha);
  }
}
