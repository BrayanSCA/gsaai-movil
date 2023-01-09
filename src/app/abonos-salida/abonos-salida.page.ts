import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbonoEntradaService } from '../datos/funciones/abonoentrada.service';
import { AbonoSalidaService } from '../datos/funciones/abonosalida.service';
import { UsuarioService } from '../datos/usuario/usuario.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-abonos-salida',
  templateUrl: './abonos-salida.page.html',
  styleUrls: ['./abonos-salida.page.scss'],
})
export class AbonosSalidaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  cod_sali_abo: any;
  fecha: any;
  abono: any;
  cantidad: any;
  finalidad: any;
  destino: any;
  recibe: any;
  entrega: any;
  observa: any;
  // evidencia: any;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private abonosalidaservice: AbonoSalidaService,
    public usuarioservice: UsuarioService,
    public abonoentradaservice: AbonoEntradaService,
  ) { 
    this.form = this.formBuilder.group({
      cod_sali_abo: [0],
      fecha: ['', Validators.compose([Validators.required])],
      abono: ['', Validators.compose([Validators.required])],
      cantidad: ['', Validators.compose([Validators.required])],
      finalidad: ['', Validators.compose([Validators.required])],
      destino: ['', Validators.compose([Validators.required])],
      recibe: ['', Validators.compose([Validators.required])],
      entrega: ['', Validators.compose([Validators.required])],
      observa: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      // evidencia: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }

  ngOnInit() {
    this.usuarioservice.obtenerUsuarios();
    this.abonoentradaservice.obtenerAbonoEntradas();
  }

  crearAbonoSalida(){ console.log(this.form.value)
    this.abonosalidaservice.guardarAbonoSalida(this.form);
  }
}