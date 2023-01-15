import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class MateriasprimasingresadasService {

  private mpingresadas: BehaviorSubject<IMpIngredasData> = new BehaviorSubject({ mpingresadas: [] } as IMpIngredasData);

  public obtenerMpIngresdas() {
    this.conexionService.verMateriasPrimasIngresadas().subscribe((res: any) => {
      const nuevaData: IMpIngredasData = {
        mpingresadas: res
      }
      this.mpingresadas.next(nuevaData); console.log("nueva data",nuevaData)
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public getMpIngresada(): IMpIngredasData {
    return this.mpingresadas.value
  }


  public getMpIngresadaObserver(): Observable<IMpIngredasData> {
    return this.mpingresadas.asObservable()
  }

  constructor(
    private conexionService: ConexionService,
  ) { }
}

interface IMateriaPrimaIngresada {
  id: string,
  fecha: string,
  materia_prima: IMateriaPrima,
  peso: number,
  procedencia: IProcedencia,
  relacion_cn: number
}

interface IProcedencia {
  cod_procedencia: string,
  nom_procedencia: string
}

interface IMateriaPrima {
  cod_mp: string,
  nombre_mp: string
}

interface IMpIngredasData {
  mpingresadas: IMateriaPrimaIngresada[]
}