import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';
import { ZonasService } from './zonas.service';

@Injectable({
  providedIn: 'root'
})
export class PilaActualizarService {

  private pilasactualizar: BehaviorSubject<IPilasActualizarData> = new BehaviorSubject({ pilasactualizar: [] } as IPilasActualizarData);

  public guardarPilaActualizar(form: FormGroup) {
    if (form.valid) {
      const formData = form.value;
      const body = {
        mover_a: formData.checkMover&&formData.zona_mover!=="-Seleccionar zona-"?Number(formData.zona_mover):0,
        cod_zona: formData.cod_zona,
        historial: {
          responsable_id: Number(formData.responsable_id),
          temperatura_promedio: String(formData.temperatura_promedio),
          humedad: formData.humedad,
          ph: formData.ph,
          volumen: formData.volumen,
          densidad: formData.densidad,
          peso: formData.peso,
          observaciones: formData.observaciones,
          fecha: formData.fecha
        }
      }
      console.log("otra cosa",formData, body)
      this.conexionService.crearPilaActualizar(body).subscribe((res: any) => {
        form.reset();
        this.zonasService.obtenerZonasFull();
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

  constructor(
    private conexionService: ConexionService,
    private zonasService: ZonasService
    ) { }
}

interface IPilasActualizar {
  historial_id: string,
  responsable_id: string,
  temperatura_promedio: string,
  humedad: string,
  ph: string,
  volumen: string,
  densidad: string,
  peso: string,
  observaciones: string,
  fecha: string
}

interface IPilasActualizarData {
  pilasactualizar: IPilasActualizar[]
}