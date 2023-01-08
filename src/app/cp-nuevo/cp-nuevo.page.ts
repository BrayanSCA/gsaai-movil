import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PilaNuevaService } from '../datos/funciones/pilanueva.service';
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
  cod_conf_pila: any;
  fecha_inicio: any;
  responsable: any;
  zona: any;
  observaciones: any;
  //evidencia: any;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private pilanuevaservice: PilaNuevaService,
    public usuarioservice: UsuarioService,
    public zonaservice: ZonaService,
    public mpservice: MpService
  ) {
    this.form = this.formBuilder.group({
      cod_conf_pila: [0],
      fecha_inicio: ['', Validators.compose([Validators.required])],
      responsable: ['', Validators.compose([Validators.required])],
      zona: ['', Validators.compose([Validators.required])],
      observaciones: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      // evidencia: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })

/*     const validar = pilanuevaservice.getPilaNueva().pilasnuevas.find(pilanueva => pilanueva.cod_conf_pila === this.cod_conf_pila)
    this.form.get("cod_conf_pila")?.setValue(validar?.cod_conf_pila)
    this.form.get("fecha_inicio")?.setValue(validar?.fecha_inicio.split(' ')[0]);
    this.form.get("responsable")?.setValue(validar?.responsable);
    this.form.get("zona")?.setValue(validar?.responsable);
    this.form.get("observaciones")?.setValue(validar?.observaciones); */
    // this.form.get("evidencia")?.setValue(validar.evidencia);
  }

  ngOnInit() {
    this.usuarioservice.obtenerUsuarios();
    this.zonaservice.obtenerZonas();
    this.mpservice.obtenerMps();
  }

  crearPilaNueva(){
    this.pilanuevaservice.guardarPilaNueva(this.form);
  }
}
