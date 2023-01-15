import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';
import { ZonasService } from './zonas.service';

@Injectable({
  providedIn: 'root'
})
export class BodyPilaService {

  private bodypilas: BehaviorSubject<IBodyPilasData> = new BehaviorSubject({ bodypilas: [] } as IBodyPilasData);

  public guardarBodyPila(form: FormGroup) {
    if (form.valid) {
      const formData = form.value;
      const bodyPila = {
        zona_id: Number(formData.zona_id),
        materia_prima: formData.materia_prima.map((item: string)=> Number(item)),
        pila: {
          cod_conf_pila: formData.cod_conf_pila,
          fecha_inicio: formData.fecha_inicio,
          responsable_id: Number(formData.responsable_id),
          observaciones: formData.observaciones
        }
      }
      console.log("console",formData, bodyPila)
      this.conexionService.crearBodyPila(bodyPila).subscribe((res: any) => {
        form.reset();
        alert ('Pila creada correctamente')
        this.zonasService.obtenerZonasFull();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } /* else {
      // alert("faltan campos por llenar");
    } */
  }


  public getBodyPila(): IBodyPilasData {
    return this.bodypilas.value
  }


  public getBodyPilaObserver(): Observable<IBodyPilasData> {
    return this.bodypilas.asObservable()
  }

  constructor(
    private conexionService: ConexionService,
    private zonasService: ZonasService
    ) { }
}

interface IBodyPilas {

  cod_conf_pila: number,
  fecha_inicio: string,
  responsable_id: string,
  observaciones: string,
  zona_id: string,
  materia_prima: []
}

interface IBodyPilasData {
  bodypilas: IBodyPilas[]
}