import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class EntradaInsumoService {

  private entradainsumos: BehaviorSubject<IEntradaInsumosData> = new BehaviorSubject({ entradainsumos: [] } as IEntradaInsumosData);

  public guardarEntradaInsumo(form: FormGroup) {
    if (form.valid) {
      const entradainsumo = form.value;
      this.conexionService.crearEntradaInsumo(entradainsumo).subscribe((res: any) => {
        form.reset();
        alert('Insumo ingresado correctamente');
        this.obtenerEntradaInsumos();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerEntradaInsumos() {
    this.conexionService.verEntradaInsumos().subscribe((res: any) => {
      const nuevaData: IEntradaInsumosData={
        entradainsumos: res
      }
      this.entradainsumos.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public getEntradaInsumo(): IEntradaInsumosData {
    return this.entradainsumos.value
  }

  public getEntradaInsumoObserver(): Observable<IEntradaInsumosData> {
    return this.entradainsumos.asObservable()
  }

  constructor(private conexionService: ConexionService) { }
}

interface IEntradaInsumos {
  cod_entra_insu: string,
  fecha: string,
  responsable: string,
  nom_insumo: string,
  cantidad: string,
  estado: string,
}

interface IEntradaInsumosData {
  entradainsumos: IEntradaInsumos[]
}