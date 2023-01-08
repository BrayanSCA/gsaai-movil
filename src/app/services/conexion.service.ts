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

  crearZona(data:any):Observable<any>{
    return this.http.post(this.url+`/zonasCreate.php`,data);
  }  

  verZonas(){
    return this.http.get(this.url+`/zonasRead.php`);
  }

  eliminarZona(cod_zona:string){
    return this.http.delete(this.url+'/zonasDelete.php?cod_zona='+cod_zona);
  }

  verZona(cod_zona:string){
    return this.http.get(this.url+'/zonasGet.php?cod_zona='+cod_zona);
  }

  actualizarZona(datosZona:any){
    const dataZona = JSON.stringify(datosZona);
    return this.http.put(this.url+'/zonasUpdate.php',dataZona);
  }

  crearMp(data:any):Observable<any>{
    return this.http.post(this.url+`/mpCreate.php`,data);
  }  

  verMps(){
    return this.http.get(this.url+`/mpRead.php`);
  }

  eliminarMp(cod_mp:string){
    return this.http.delete(this.url+'/mpDelete.php?cod_mp='+cod_mp);
  }

  verMp(cod_mp:string){
    return this.http.get(this.url+'/mpGet.php?cod_mp='+cod_mp);
  }

  actualizarMp(datosMp:any){
    const dataMp = JSON.stringify(datosMp);
    return this.http.put(this.url+'/mpUpdate.php',dataMp);
  }

  crearProcedencia(data:any):Observable<any>{
    return this.http.post(this.url+`/procedenciaCreate.php`,data);
  }  

  verProcedencias(){
    return this.http.get(this.url+`/procedenciaRead.php`);
  }

  eliminarProcedencia(cod_procedencia:string){
    return this.http.delete(this.url+'/procedenciaDelete.php?cod_procedencia='+cod_procedencia);
  }

  verProcedencia(cod_procedencia:string){
    return this.http.get(this.url+'/procedenciaGet.php?cod_procedencia='+cod_procedencia);
  }

  actualizarProcedencia(datosProcedencia:any){
    const dataProcedencia = JSON.stringify(datosProcedencia);
    return this.http.put(this.url+'/procedenciaUpdate.php',dataProcedencia);
  }

  crearInsumo(data:any):Observable<any>{
    return this.http.post(this.url+`/insumoCreate.php`,data);
  }  

  verInsumos(){
    return this.http.get(this.url+`/insumoRead.php`);
  }

  eliminarInsumo(cod_insumo:string){
    return this.http.delete(this.url+'/insumoDelete.php?cod_insumo='+cod_insumo);
  }

  verInsumo(cod_insumo:string){
    return this.http.get(this.url+'/insumoGet.php?cod_insumo='+cod_insumo);
  }

  actualizarInsumo(datosInsumo:any){
    const dataInsumo = JSON.stringify(datosInsumo);
    return this.http.put(this.url+'/insumoUpdate.php',dataInsumo);
  }

  crearMejorador(data:any):Observable<any>{
    return this.http.post(this.url+`/mejoradorCreate.php`,data);
  }  

  verMejoradores(){
    return this.http.get(this.url+`/mejoradorRead.php`);
  }

  eliminarMejorador(cod_mejorador:string){
    return this.http.delete(this.url+'/mejoradorDelete.php?cod_mejorador='+cod_mejorador);
  }

  verMejorador(cod_mejorador:string){
    return this.http.get(this.url+'/mejoradorGet.php?cod_mejorador='+cod_mejorador);
  }

  actualizarMejorador(datosMejorador:any){
    const dataMejorador = JSON.stringify(datosMejorador);
    return this.http.put(this.url+'/mejoradorUpdate.php',dataMejorador);
  }

  crearSecundaria(data:any):Observable<any>{
    return this.http.post(this.url+`/actiSecunCreate.php`,data);
  }  

  verSecundarias(){
    return this.http.get(this.url+`/actiSecunRead.php`);
  }

  eliminarSecundaria(cod_secund:string){
    return this.http.delete(this.url+'/actiSecunDelete.php?cod_secund='+cod_secund);
  }

  verSecundaria(cod_secund:string){
    return this.http.get(this.url+'/actiSecunGet.php?cod_secund='+cod_secund);
  }

  actualizarSecundaria(datosSecundaria:any){
    const dataSecundaria = JSON.stringify(datosSecundaria);
    return this.http.put(this.url+'/actiSecunUpdate.php',dataSecundaria);
  }

  crearEntradaMp(data:any):Observable<any>{
    return this.http.post(this.url+`/entradaMpCreate.php`,data);
  }  

  verEntradaMps(){
    return this.http.get(this.url+`/entradaMpRead.php`);
  }

  eliminarEntradaMp(cod_entra_mp:string){
    return this.http.delete(this.url+'/EntradaMpDelete.php?cod_entra_mp='+cod_entra_mp);
  }

  verEntradaMp(cod_entra_mp:string){
    return this.http.get(this.url+'/EntradaMpGet.php?cod_entra_mp='+cod_entra_mp);
  }

  actualizarEntradaMp(datosEntradaMp:any){
    const dataEntradaMp = JSON.stringify(datosEntradaMp);
    return this.http.put(this.url+'/EntradaMpUpdate.php',dataEntradaMp);
  }

  crearPilaNueva(data:any):Observable<any>{
    return this.http.post(this.url+`/pilaNuevaCreate.php`,data);
  } 
  
  verPilasNuevas(){
    return this.http.get(this.url+`/pilaNuevaRead.php`);
  }

  verPilaNueva(cod_conf_pila:string){
    return this.http.get(this.url+'/pilaNuevaGet.php?cod_conf_pila='+cod_conf_pila);
  }

  crearPilaActualizar(data:any):Observable<any>{
    return this.http.post(this.url+`/pilaActualizarCreate.php`,data);
  } 
  
  verPilasActualizar(){
    return this.http.get(this.url+`/pilaActualizarRead.php`);
  }

  verPilaActualizar(cod_actualiza:string){
    return this.http.get(this.url+'/pilaActualizarGet.php?cod_actualiza='+cod_actualiza);
  }

  crearBitacora(data:any):Observable<any>{
    return this.http.post(this.url+`/bitacoraCreate.php`,data);
  } 
  
  verBitacoras(){
    return this.http.get(this.url+`/bitacoraRead.php`);
  }

  verBitacora(cod_bita:string){
    return this.http.get(this.url+'/bitacoraGet.php?cod_bita='+cod_bita);
  }

  crearAbonoEntrada(data:any):Observable<any>{
    return this.http.post(this.url+`/abonoEntradaCreate.php`,data);
  } 
  
  verAbonoEntradas(){
    return this.http.get(this.url+`/abonoEntradaRead.php`);
  }

  verAbonoEntrada(cod_abono:string){
    return this.http.get(this.url+'/abonoEntradaGet.php?cod_abono='+cod_abono);
  }
}