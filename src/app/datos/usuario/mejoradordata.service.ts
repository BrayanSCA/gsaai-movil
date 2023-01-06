import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class MejoradorService {

  private mejoradores: BehaviorSubject<IMejoradoresData> = new BehaviorSubject({ mejoradores: [] } as IMejoradoresData);

  public guardarMejorador(form: FormGroup) {
    if (form.valid) {
      const mejorador = form.value;
      this.conexionService.crearMejorador(mejorador).subscribe((res: any) => {
        form.reset();
        alert('Mejorador ingresado correctamente');
        this.obtenerMejoradores();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerMejoradores() {
    this.conexionService.verMejoradores().subscribe((res: any) => {
      const nuevaData: IMejoradoresData = {
        mejoradores: res
      }
      this.mejoradores.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarMejorador(cod_mejorador: string) {
    this.conexionService.eliminarMejorador(cod_mejorador).subscribe((res: any) => {
      this.obtenerMejoradores();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getMejoradores(): IMejoradoresData {
    return this.mejoradores.value
  }

  public getMejoradorObserver(): Observable<IMejoradoresData> {
    return this.mejoradores.asObservable()
  }

  public modificarMejorador(form: FormGroup, codactual: string) {
    if (form.valid) {
      const mejorador = form.value;
      mejorador["codactual"] = codactual 
      this.conexionService.actualizarMejorador(mejorador).subscribe((res: any) => {
        console.log("exitoso");
        alert('Mejorador modificado correctamente');
        this.obtenerMejoradores();
      }, (error: any) => {
        console.log('ERROR', error)
      })
    }
  }

  constructor(private conexionService: ConexionService) { }
}

interface IMejoradores {
  cod_mejorador: string,
  nom_mejorador: string,
  caracteristicas: string  
}

interface IMejoradoresData {
  mejoradores: IMejoradores[]
}
