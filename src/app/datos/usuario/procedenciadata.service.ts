import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class ProcedenciaService {

  private procedencias: BehaviorSubject<IProcedenciasData> = new BehaviorSubject({ procedencias: [] } as IProcedenciasData);

  public guardarProcedencia(form: FormGroup) {
    if (form.valid) {
      const procedencia = form.value;
      this.conexionService.crearProcedencia(procedencia).subscribe((res: any) => {
        form.reset();
        alert('Procedencia ingresada correctamente');
        this.obtenerProcedencias();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerProcedencias() {
    this.conexionService.verProcedencias().subscribe((res: any) => {
      const nuevaData: IProcedenciasData = {
        procedencias: res
      }
      this.procedencias.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarProcedencia(cod_procedencia: string) {
    this.conexionService.eliminarProcedencia(cod_procedencia).subscribe((res: any) => {
      this.obtenerProcedencias();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getProcedencias(): IProcedenciasData {
    return this.procedencias.value
  }

  public getProcedenciaObserver(): Observable<IProcedenciasData> {
    return this.procedencias.asObservable()
  }

  public modificarProcedencia(form: FormGroup) {
    if (form.valid) {
      const procedencia = form.value;
      console.log(procedencia)
      this.conexionService.actualizarProcedencia(procedencia).subscribe((res: any) => {
        console.log("exitoso");
        alert('Procedencia modificada correctamente');
        this.obtenerProcedencias();
      }, (error: any) => {
        console.log('ERROR', error)
      })
    }
  }

  constructor(private conexionService: ConexionService) { }
}

interface IProcedencias {
  cod_procedencia: string,
  nom_procedencia: string
}

interface IProcedenciasData {
  procedencias: IProcedencias[]
}
