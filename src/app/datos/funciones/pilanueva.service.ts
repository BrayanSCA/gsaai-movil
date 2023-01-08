import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class PilaNuevaService {

  private pilasnuevas: BehaviorSubject<IPilasNuevasData> = new BehaviorSubject({ pilasnuevas: [] } as IPilasNuevasData);

  public guardarPilaNueva(form: FormGroup) {
    if (form.valid) {
      const pilanueva = form.value;
      this.conexionService.crearPilaNueva(pilanueva).subscribe((res: any) => {
        form.reset();
        alert('Pila nueva ingresada correctamente');
        this.obtenerPilasNuevas();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerPilasNuevas() {
    this.conexionService.verPilasNuevas().subscribe((res: any) => {
      const nuevaData: IPilasNuevasData={
        pilasnuevas: res
      }
      this.pilasnuevas.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public getPilaNueva(): IPilasNuevasData {
    return this.pilasnuevas.value
  }

  public getPilaNuevaObserver(): Observable<IPilasNuevasData> {
    return this.pilasnuevas.asObservable()
  }

  constructor(private conexionService: ConexionService) { }
}

interface IPilasNuevas {
  cod_conf_pila: string,
  fecha_inicio: string,
  responsable: string,
  zona: string,
  observaciones: string,
  // evidencia: string
}

interface IPilasNuevasData {
  pilasnuevas: IPilasNuevas[]
}