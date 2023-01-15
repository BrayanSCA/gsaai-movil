import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BodyPilaService } from '../datos/funciones/bodypila.service';
import { MateriasprimasingresadasService } from '../datos/funciones/materiasprimasingresadas.service';
import { MpService } from '../datos/usuario/mpdata.service';
import { UsuarioService } from '../datos/usuario/usuario.service';
import UsuarioData from '../datos/usuario/usuariodata';
import { ZonaService } from '../datos/usuario/zonadata.service';

@Component({
  selector: 'app-cp-nuevo',
  templateUrl: './cp-nuevo.page.html',
  styleUrls: ['./cp-nuevo.page.scss'],
})
export class CpNuevoPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver()
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public usuarioservice: UsuarioService,
    public zonaservice: ZonaService,
    public mpservice: MpService,
    public bodyPilaService: BodyPilaService,
    public mpingresadaservice: MateriasprimasingresadasService
  ) {
    this.form = this.formBuilder.group({
      cod_conf_pila: ['', Validators.compose([Validators.required])],
      fecha_inicio: ['', Validators.compose([Validators.required])],
      responsable_id: ['', Validators.compose([Validators.required])],
      observaciones: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      materia_prima: [[], Validators.compose([Validators.required])],
      zona_id: [[], Validators.compose([Validators.required])],

    })

    this.usuarioObservable.subscribe(item=> console.log(item))
  }

  ngOnInit() {
    this.usuarioservice.obtenerUsuarios();
    this.zonaservice.obtenerZonas();
    this.mpingresadaservice.obtenerMpIngresdas();
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  crearPilaNueva(){ console.log(this.form.value)
    this.bodyPilaService.guardarBodyPila(this.form)
  }
}
