import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PilaActualizarService } from '../datos/funciones/pilaactualizar.service';
import { UsuarioService } from '../datos/usuario/usuario.service';
import UsuarioData from '../datos/usuario/usuariodata';
import { ZonaService } from '../datos/usuario/zonadata.service';

@Component({
  selector: 'app-cp-actualizar',
  templateUrl: './cp-actualizar.page.html',
  styleUrls: ['./cp-actualizar.page.scss'],
})
export class CpActualizarPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pilaactualizarservice: PilaActualizarService,
    public usuarioservice: UsuarioService,
    public zonaservice: ZonaService,
  ) {
    this.form = this.formBuilder.group({
      historial_id: [0],
      responsable_id: ['', Validators.compose([Validators.required])],
      temperatura_promedio: ['', Validators.compose([Validators.required])],
      humedad: ['', Validators.compose([Validators.required])],
      ph: ['', Validators.compose([Validators.required])],
      volumen: ['', Validators.compose([Validators.required])],
      densidad: ['', Validators.compose([Validators.required])],
      peso: ['', Validators.compose([Validators.required])],
      observaciones: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      fecha: ['', Validators.compose([Validators.required])],
      cod_zona: ['', Validators.compose([Validators.required])],
      zona_mover: [''],
      checkMover: [false]

    })
   }

  ngOnInit() {
    this.usuarioservice.obtenerUsuarios();
    this.zonaservice.obtenerZonas();
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  crearPilaActualizar(){ console.log(this.form.value)
    this.pilaactualizarservice.guardarPilaActualizar(this.form);
  }

}
