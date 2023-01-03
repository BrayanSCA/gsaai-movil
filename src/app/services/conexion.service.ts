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
    return this.http.post(this.url+`/fichaCreate.php`,data);
  }

  verFichas(){
    return this.http.get(this.url+`/fichaRead.php`);
  }

  eliminarFicha(cod_ficha:string){
    return this.http.delete(this.url+'/fichaDelete.php?cod_ficha='+cod_ficha);
  }

  verFicha(cod_ficha:string){
    return this.http.get(this.url+'/fichaGet.php?cod_ficha='+cod_ficha);
  }

  actualizarFicha(datosFicha:any){
    const dataFicha = JSON.stringify(datosFicha);
    return this.http.put(this.url+'/fichaUpdate.php',dataFicha);
  }

  crearRol(data:any):Observable<any>{
    return this.http.post(this.url+`/rolCreate.php`,data);
  }  

  verRoles(){
    return this.http.get(this.url+`/rolRead.php`);
  }

  eliminarRol(cod_rol:string){
    return this.http.delete(this.url+'/rolDelete.php?cod_rol='+cod_rol);
  }

  verRol(cod_rol:string){
    return this.http.get(this.url+'/rolGet.php?cod_rol='+cod_rol);
  }

  actualizarRol(datosRol:any){
    const dataRol = JSON.stringify(datosRol);
    return this.http.put(this.url+'/rolUpdate.php',dataRol);
  }

  crearUsuario(data:any):Observable<any>{
    return this.http.post(this.url+`/usuarioCreate.php`,data);
  }  

  verUsuarios(){
    return this.http.get(this.url+`/usuarioRead.php`);
  }

  eliminarUsuario(di:string){
    return this.http.delete(this.url+'/usuarioDelete.php?di='+di);
  }

  verUsuario(di:string){
    return this.http.get(this.url+'/usuarioGet.php?di='+di);
  }

  actualizarUsuario(datosUsuario:any){
    const dataUser = JSON.stringify(datosUsuario);
    return this.http.put(this.url+'/usuarioUpdate.php',dataUser);
  }

}