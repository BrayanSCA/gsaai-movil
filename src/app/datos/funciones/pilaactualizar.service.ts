import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class PilaActualizarService {

  private pilasactualizar: BehaviorSubject<IPilasActualizarData> = new BehaviorSubject({ pilasactualizar: [] } as IPilasActualizarData);

  public guardarPilaActualizar(form: FormGroup) {
    if (form.valid) {
      const pilaactualizar = form.value;
      console.log(pilaactualizar)
      this.conexionService.crearPilaActualizar(pilaactualizar).subscribe((res: any) => {
        form.reset();
        alert('Pila actualizada correctamente');
        this.obtenerPilasActualizar();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerPilasActualizar() {
    this.conexionService.verPilasActualizar().subscribe((res: any) => {
      const nuevaData: IPilasActualizarData={
        pilasactualizar: res
      }
      this.pilasactualizar.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public getPilaActualizar(): IPilasActualizarData {
    return this.pilasactualizar.value
  }

  public getPilaActualizarObserver(): Observable<IPilasActualizarData> {
    return this.pilasactualizar.asObservable()
  }

  constructor(private conexionService: ConexionService) { }
}

interface IPilasActualizar {
  cod_actualiza: string,
  fecha: string,
  // evidencia: string
  responsable: string,
  zona: string,
  temp_prom: string,
  humedad: string,
  ph: string,
  volumen: string,
  densidad: string,
  peso: string,
  observa: string
}

interface IPilasActualizarData {
  pilasactualizar: IPilasActualizar[]
}