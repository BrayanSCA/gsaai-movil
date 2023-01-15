import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
    providedIn: 'root'
})
export class ZonasService {

    private datazona: BehaviorSubject<IZonas[]> = new BehaviorSubject([] as IZonas[]);

    public obtenerZonasFull() {
        this.conexionService.obtenerZonasFull().subscribe((res: any) => {
            this.datazona.next(res)
        }, (error: any) => {
            console.log("ERROR ===", error);
        })
    }

    public getZona(cod_zona:string): Observable<IZonas[]> {
        return this.datazona.asObservable().pipe(map(item=> item.filter(zona=> zona.cod_zona===cod_zona)))
      }

    constructor(
        private conexionService: ConexionService,
    ) {
        this.datazona.subscribe(data => {
            console.log(data)
        })
    }
}

interface IZonas {
    cod_zona: string,
    fecha: string,
    nom_zona: string,
    pila: IPila | null,
}

interface IPila {
    cod_conf_pila: string,
    fecha_inicio: string,
    responsable: IUsuario,
    observaciones: string,
    materia_prima_ingresada: IMateriaPrimaIngresada[]
    historial: IHistorialPila[]
}

interface IMateriaPrimaIngresada {
    fecha: string,
    materia_prima: IMateriaPrima,
    peso: number,
    procedencia: IProcedencia,
    relacion_cn: number
}

interface IUsuario {
    di: string,
    fecha: string,
    nombres: string,
    apellidos: string,
    correo: string,
    rol: IRol,
    ficha: IFicha
}

interface IRol {
    cod_rol: string,
    nom_rol: string
}

interface IFicha {
    cod_ficha: string,
    nom_ficha: string
}

interface IProcedencia {
    cod_procedencia: string,
    nom_procedencia: string
}

interface IMateriaPrima {
    cod_mp: string,
    nombre_mp: string
}

interface IHistorialPila {
    fecha: string,
    responsable: IUsuario,
    temperatura_promedio: string,
    humedad: string,
    ph: number,
    volumen: number,
    densidad: number,
    peso: number,
    observaciones: string
}