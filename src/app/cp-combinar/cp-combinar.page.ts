import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PilacombinarService } from '../datos/funciones/pilacombinar.service';
import UsuarioData from '../datos/usuario/usuariodata';
import { ZonaService } from '../datos/usuario/zonadata.service';


@Component({
  selector: 'app-cp-combinar',
  templateUrl: './cp-combinar.page.html',
  styleUrls: ['./cp-combinar.page.scss'],
})
export class CpCombinarPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver()
  form: FormGroup
  constructor(
    public pilaCombinarService: PilacombinarService,
    private formBuilder: FormBuilder,
    public zonaservice: ZonaService
  ) {
    this.form = this.formBuilder.group({
      zona_origen: ['', Validators.compose([Validators.required])],
      zona_destino: ['', Validators.compose([Validators.required])],
      fecha: ['', Validators.compose([Validators.required])],
      observaciones: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }

  ngOnInit() {
    this.zonaservice.obtenerZonas();
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  MoverPila() {
    this.pilaCombinarService.moverPila(this.form)
  }
}
