import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class FichaService {

  private fichas: BehaviorSubject<IFichasData> = new BehaviorSubject({ fichas: [] } as IFichasData);

  public guardarFicha(form: FormGroup) {
    if (form.valid) {
      const ficha = form.value;
      this.conexionService.enviarDatos(ficha).subscribe((res: any) => {
        form.reset();
        alert('Ficha ingresada correctamente');
        this.obtenerFichas();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerFichas() {
    this.conexionService.verFichas().subscribe((res: any) => {
      const nuevaData: IFichasData = {
        fichas: res
      }
      this.fichas.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarFicha(cod_ficha: string) {
    this.conexionService.eliminarFicha(cod_ficha).subscribe((res: any) => {
      this.obtenerFichas();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getFichas(): IFichasData {
    return this.fichas.value
  }

  public getFichaObserver(): Observable<IFichasData> {
    return this.fichas.asObservable()
  }

  public modificarFicha(form: FormGroup, codactual: string) {
    if (form.valid) {
      const ficha = form.value;
      ficha["codactual"] = codactual 
      this.conexionService.actualizarFicha(ficha).subscribe((res: any) => {
        console.log("exitoso");
        alert('Ficha modificada correctamente');
        this.obtenerFichas();
      }, (error: any) => {
        console.log('ERROR', error)
      })
    }
  }

  constructor(private conexionService: ConexionService) { }
}

interface IFichas {
  fecha: string,
  cod_ficha: string,
  nom_ficha: string
}

interface IFichasData {
  fichas: IFichas[]
}
