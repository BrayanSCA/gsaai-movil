import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class AbonoSalidaService {

  private abonosalidas: BehaviorSubject<IAbonoSalidasData> = new BehaviorSubject({ abonosalidas: [] } as IAbonoSalidasData);

  public guardarAbonoSalida(form: FormGroup) {
    if (form.valid) {
      const abonosalida = form.value;
      this.conexionService.crearAbonoSalida(abonosalida).subscribe((res: any) => {
        form.reset();
        alert('Salida de abono ingresado correctamente');
        this.obtenerAbonoSalidas();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerAbonoSalidas() {
    this.conexionService.verAbonoSalidas().subscribe((res: any) => {
      const nuevaData: IAbonoSalidasData={
        abonosalidas: res
      }
      this.abonosalidas.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public getAbonoSalida(): IAbonoSalidasData {
    return this.abonosalidas.value
  }

  public getAbonoSalidaObserver(): Observable<IAbonoSalidasData> {
    return this.abonosalidas.asObservable()
  }

  constructor(private conexionService: ConexionService) { }
}

interface IAbonoSalidas {
  cod_sali_abo: string,
  fecha: string,
  abono: string,
  cantidad: string,
  finalidad: string,
  destino: string,
  recibe: string,
  entrega: string,
  observa: string
  // evidencia: string
}

interface IAbonoSalidasData {
  abonosalidas: IAbonoSalidas[]
}