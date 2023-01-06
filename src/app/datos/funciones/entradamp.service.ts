import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class EntradaMpService {

  private entradamps: BehaviorSubject<IEntradaMpsData> = new BehaviorSubject({ entradamps: [] } as IEntradaMpsData);

  public guardarEntradaMp(form: FormGroup) {
    if (form.valid) {
      const entradamp = form.value;
      this.conexionService.crearEntradaMp(entradamp).subscribe((res: any) => {
        form.reset();
        alert('Entrada de materia prima ingresada correctamente');
        this.obtenerEntradaMps();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerEntradaMps() {
    this.conexionService.verEntradaMps().subscribe((res: any) => {
      const nuevaData: IEntradaMpsData={
        entradamps: res
      }
      this.entradamps.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarEntradaMp(cod_entra_mp: string) {
    this.conexionService.eliminarEntradaMp(cod_entra_mp).subscribe((res: any) => {
      this.obtenerEntradaMps();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getEntradaMp(): IEntradaMpsData {
    return this.entradamps.value
  }

  public getEntradaMpObserver(): Observable<IEntradaMpsData> {
    return this.entradamps.asObservable()
  }

  public modificarEntradaMp(form: FormGroup, codactual: string){
    if(form.valid){
    const entradamp = form.value;
    entradamp["codactual"] = codactual
    this.conexionService.actualizarEntradaMp(entradamp).subscribe((res: any)=>{
      console.log("exitoso");
      alert('Entrada de materia prima modificada correctamente');
      this.obtenerEntradaMps();
    },(error:any)=> {
      console.log('ERROR', error)
    })
  }
}

  constructor(private conexionService: ConexionService) { }
}

interface IEntradaMps {
  cod_entra_mp: string,
  fecha: string,
  nom_mp: string,
  peso: string,
  procedencia: string
}

interface IEntradaMpsData {
  entradamps: IEntradaMps[]
}