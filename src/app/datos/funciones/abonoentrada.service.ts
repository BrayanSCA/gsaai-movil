import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class AbonoEntradaService {

  private abonoentradas: BehaviorSubject<IAbonoEntradasData> = new BehaviorSubject({ abonoentradas: [] } as IAbonoEntradasData);

  public guardarAbonoEntrada(form: FormGroup) {
    if (form.valid) {
      const abonoentrada = form.value;
      this.conexionService.crearAbonoEntrada(abonoentrada).subscribe((res: any) => {
        form.reset();
        alert('Abono ingresado correctamente');
        this.obtenerAbonoEntradas();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerAbonoEntradas() {
    this.conexionService.verAbonoEntradas().subscribe((res: any) => {
      const nuevaData: IAbonoEntradasData={
        abonoentradas: res
      }
      this.abonoentradas.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public getAbonoEntrada(): IAbonoEntradasData {
    return this.abonoentradas.value
  }

  public getAbonoEntradaObserver(): Observable<IAbonoEntradasData> {
    return this.abonoentradas.asObservable()
  }

  constructor(private conexionService: ConexionService) { }
}

interface IAbonoEntradas {
  cod_abono: string,
  fecha: string,
  lote_abono: string,
  kilos_abono: string,
  mejorador: string,
  cantidad: string,
  responsable: string,
  observa: string,
  // evidencia: string
}

interface IAbonoEntradasData {
  abonoentradas: IAbonoEntradas[]
}