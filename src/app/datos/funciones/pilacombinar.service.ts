import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';
import { ZonaService } from '../usuario/zonadata.service';
import { ZonasService } from './zonas.service';

@Injectable({
  providedIn: 'root'
})
export class PilacombinarService {

  public moverPila(form: FormGroup) {
    if (form.valid) {
      const formData = form.value;
      const bodyPila = {
        zona_origen: Number(formData.zona_origen),
        zona_destino: Number(formData.zona_destino),
        fecha: formData.fecha,
        observaciones: formData.observaciones
      }
      console.log("console", formData, bodyPila)
      this.conexionService.crearCombinacionPila(bodyPila).subscribe((res: any) => {
        form.reset();    
        this.zonaservice.obtenerZonas();
        this.zonasService.obtenerZonasFull();
        alert ("Combinación de pilas exitosa")
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  constructor(
    private conexionService: ConexionService,
    private zonaservice: ZonaService,
    private zonasService: ZonasService
  ) { }
}
