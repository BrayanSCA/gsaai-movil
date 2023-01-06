import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class SecundariaService {

  private secundarias: BehaviorSubject<ISecundariasData> = new BehaviorSubject({ secundarias: [] } as ISecundariasData);

  public guardarSecundaria(form: FormGroup) {
    if (form.valid) {
      const secundaria = form.value;
      this.conexionService.crearSecundaria(secundaria).subscribe((res: any) => {
        form.reset();
        alert('Actividad no rutinaria ingresada correctamente');
        this.obtenerSecundarias();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerSecundarias() {
    this.conexionService.verSecundarias().subscribe((res: any) => {
      const nuevaData: ISecundariasData={
        secundarias: res
      }
      this.secundarias.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarSecundaria(cod_secund: string) {
    this.conexionService.eliminarSecundaria(cod_secund).subscribe((res: any) => {
      this.obtenerSecundarias();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getSecundarias(): ISecundariasData {
    return this.secundarias.value
  }

  public getSecundariaObserver(): Observable<ISecundariasData> {
    return this.secundarias.asObservable()
  }

  public modificarSecundaria(form: FormGroup, codactual: string){
    if(form.valid){
    const secundaria = form.value;
    secundaria["codactual"] = codactual
    this.conexionService.actualizarSecundaria(secundaria).subscribe((res: any)=>{
      console.log("exitoso");
      alert('Actividad no rutinaria modificada correctamente');
      this.obtenerSecundarias();
    },(error:any)=> {
      console.log('ERROR', error)
    })
  }
}

  constructor(private conexionService: ConexionService) { }
}

interface ISecundarias {
  cod_secund: string,
  fecha: string,
  nom_acti_sec: string
}

interface ISecundariasData {
  secundarias: ISecundarias[]
}