import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbonoEntradaService } from '../datos/funciones/abonoentrada.service';
import { MejoradorService } from '../datos/usuario/mejoradordata.service';
import { UsuarioService } from '../datos/usuario/usuario.service';
import UsuarioData from '../datos/usuario/usuariodata';
import { ZonaService } from '../datos/usuario/zonadata.service';

@Component({
  selector: 'app-abonos-entrada',
  templateUrl: './abonos-entrada.page.html',
  styleUrls: ['./abonos-entrada.page.scss'],
})
export class AbonosEntradaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  cod_abono: any;
  fecha: any;
  lote_abono: any;
  kilos_abono: any;
  mejorador: any;
  cantidad: any;
  responsable: any;
  observa: any;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private abonoentradaservice: AbonoEntradaService,
    public zonaservice: ZonaService,
    public usuarioservice: UsuarioService,
    public mejoradorservice: MejoradorService
  ) {
    this.form = this.formBuilder.group({
      cod_abono: [0],
      fecha: ['', Validators.compose([Validators.required])],
      lote_abono: ['', Validators.compose([Validators.required])],
      kilos_abono: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      mejorador: ['', Validators.compose([Validators.required])],
      cantidad: ['', Validators.compose([Validators.required])],
      responsable: ['', Validators.compose([Validators.required])],
      observa: ['', Validators.compose([Validators.required])],
    })
   }

  ngOnInit() {
    this.usuarioservice.obtenerUsuarios();
    this.zonaservice.obtenerZonas();
    this.mejoradorservice.obtenerMejoradores();
  }

  crearAbonoEntrada(){ console.log(this.form.value)
    this.abonoentradaservice.guardarAbonoEntrada  (this.form);
  }
}
