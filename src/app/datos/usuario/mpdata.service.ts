import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class MpService {

  private mps: BehaviorSubject<IMpsData> = new BehaviorSubject({ mps: [] } as IMpsData);

  public guardarMp(form: FormGroup) {
    if (form.valid) {
      const mp = form.value;
      this.conexionService.crearMp(mp).subscribe((res: any) => {
        form.reset();
        alert('Materia prima ingresado correctamente');
        this.obtenerMps();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerMps() {
    this.conexionService.verMps().subscribe((res: any) => {
      const nuevaData: IMpsData={
        mps: res
      }
      this.mps.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarMp(cod_mp: string) {
    this.conexionService.eliminarMp(cod_mp).subscribe((res: any) => {
      this.obtenerMps();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getMps(): IMpsData {
    return this.mps.value
  }

  public getMpObserver(): Observable<IMpsData> {
    return this.mps.asObservable()
  }

  public modificarMp(form: FormGroup, codactual: string){
    if(form.valid){
    const mp = form.value;
    mp["codactual"] = codactual
    this.conexionService.actualizarMp(mp).subscribe((res: any)=>{
      console.log("exitoso");
      alert('Materia prima modificada correctamente');
      this.obtenerMps();
    },(error:any)=> {
      console.log('ERROR', error)
    })
  }
}

  constructor(private conexionService: ConexionService) { }
}

interface IMps {
  cod_mp: string,
  nombre_mp: string,
  stock: string,
  relacion_cn: string
}

interface IMpsData {
  mps: IMps[]
}