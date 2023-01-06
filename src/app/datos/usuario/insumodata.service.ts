import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  private insumos: BehaviorSubject<IInsumosData> = new BehaviorSubject({ insumos: [] } as IInsumosData);

  public guardarInsumo(form: FormGroup) {
    if (form.valid) {
      const insumo = form.value;
      this.conexionService.crearInsumo(insumo).subscribe((res: any) => {
        form.reset();
        alert('Insumo ingresado correctamente');
        this.obtenerInsumos();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerInsumos() {
    this.conexionService.verInsumos().subscribe((res: any) => {
      const nuevaData: IInsumosData = {
        insumos: res
      }
      this.insumos.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarInsumo(cod_insumo: string) {
    this.conexionService.eliminarInsumo(cod_insumo).subscribe((res: any) => {
      this.obtenerInsumos();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getInsumos(): IInsumosData {
    return this.insumos.value
  }

  public getInsumoObserver(): Observable<IInsumosData> {
    return this.insumos.asObservable()
  }

  public modificarInsumo(form: FormGroup, codactual: string) {
    if (form.valid) {
      const insumo = form.value;
      insumo["codactual"] = codactual 
      this.conexionService.actualizarInsumo(insumo).subscribe((res: any) => {
        console.log("exitoso");
        alert('Insumo modificado correctamente');
        this.obtenerInsumos();
      }, (error: any) => {
        console.log('ERROR', error)
      })
    }
  }

  constructor(private conexionService: ConexionService) { }
}

interface IInsumos {
  fecha: string,
  cod_insumo: string,
  nom_insumo: string,
  caracteristicas: string,
  estado: string,
  procedencia: string
}

interface IInsumosData {
  insumos: IInsumos[]
}
