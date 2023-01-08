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
  cod_actualiza: any;
  fecha: any;
  // evidencia: any;
  responsable: any;
  zona: any;
  temp_prom: any;
  humedad: any;
  ph: any;
  volumen: any;
  densidad: any;
  peso: any;
  observa: any;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pilaactualizarservice: PilaActualizarService,
    public usuarioservice: UsuarioService,
    public zonaservice: ZonaService,
  ) {
    this.form = this.formBuilder.group({
      cod_actualiza: [0],
      fecha: ['', Validators.compose([Validators.required])],
      // evidencia: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      responsable: ['', Validators.compose([Validators.required])],
      zona: ['', Validators.compose([Validators.required])],
      temp_prom: ['', Validators.compose([Validators.required])],
      humedad: ['', Validators.compose([Validators.required])],
      ph: ['', Validators.compose([Validators.required])],
      volumen: ['', Validators.compose([Validators.required])],
      densidad: ['', Validators.compose([Validators.required])],
      peso: ['', Validators.compose([Validators.required])],
      observa: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
   }

  ngOnInit() {
    this.usuarioservice.obtenerUsuarios();
    this.zonaservice.obtenerZonas();
  }
  crearPilaActualizar(){ console.log(this.form.value)
    this.pilaactualizarservice.guardarPilaActualizar(this.form);
  }

}
