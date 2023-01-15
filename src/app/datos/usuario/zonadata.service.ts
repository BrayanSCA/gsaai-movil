import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';
// import { ZonasService } from '../funciones/zonas.service';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  private zonas: BehaviorSubject<IZonasData> = new BehaviorSubject({ zonas: [] } as IZonasData);

  public guardarZona(form: FormGroup) {
    if (form.valid) {
      const zona = form.value;
      this.conexionService.crearZona(zona).subscribe((res: any) => {
        // this.zonaService.crearZona(zona)
        form.reset();
        alert('Zona ingresada correctamente');
        this.obtenerZonas();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerZonas() {
    this.conexionService.verZonas().subscribe((res: any) => {
      const nuevaData: IZonasData = {
        zonas: res
      }
      console.log(nuevaData)
      this.zonas.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarZona(cod_zona: string) {
    this.conexionService.eliminarZona(cod_zona).subscribe((res: any) => {
      this.obtenerZonas();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getZonas(): IZonasData {
    return this.zonas.value
  }

  public getZonaObserver(): Observable<IZonasData> {
    return this.zonas.asObservable()
  }

  public ZonasConPilaObserver(): Observable<IZonas[]> {
    return this.zonas.asObservable().pipe(map(item=> item.zonas.filter(zona=> zona.pila_id)))
  }

  public ZonasSinPilaObserver(): Observable<IZonas[]> {
    return this.zonas.asObservable().pipe(map(item=> item.zonas.filter(zona=> !zona.pila_id)))
  }

  public modificarZona(form: FormGroup, codactual: string) {
    if (form.valid) {
      const zona = form.value;
      zona["codactual"] = codactual
      this.conexionService.actualizarZona(zona).subscribe((res: any) => {
        console.log("exitoso");
        alert('Zona modificada correctamente');
        this.obtenerZonas();
      }, (error: any) => {
        console.log('ERROR', error)
      })
    }
  }

  constructor(
    private conexionService: ConexionService,
  ) { }
}

interface IZonas {
  cod_zona: string,
  fecha: string,
  nom_zona: string,
  pila_id: number
}

interface IZonasData {
  zonas: IZonas[]
}
