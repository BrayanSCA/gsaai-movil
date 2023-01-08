import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class BitacoraService {

  private bitacoras: BehaviorSubject<IBitacorasData> = new BehaviorSubject({ bitacoras: [] } as IBitacorasData);

  public guardarBitacora(form: FormGroup) {
    if (form.valid) {
      const bitacora = form.value;
      this.conexionService.crearBitacora(bitacora).subscribe((res: any) => {
        form.reset();
        alert('Bitacora ingresada correctamente');
        this.obtenerBitacoras();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerBitacoras() {
    this.conexionService.verBitacoras().subscribe((res: any) => {
      const nuevaData: IBitacorasData={
        bitacoras: res
      }
      this.bitacoras.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public getBitacora(): IBitacorasData {
    return this.bitacoras.value
  }

  public getBitacoraObserver(): Observable<IBitacorasData> {
    return this.bitacoras.asObservable()
  }

  constructor(private conexionService: ConexionService) { }
}

interface IBitacoras {
  cod_bita: string,
  fecha: string,
  responsable: string,
  rutinarias: string,
  no_rutinarias: string,
  num_operarios: string,
  insumos: string,
  observa: string
  // evidencia: string
}

interface IBitacorasData {
  bitacoras: IBitacoras[]
}