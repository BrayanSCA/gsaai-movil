import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BitacoraService } from '../datos/funciones/bitacora.service';
import UsuarioData from '../datos/usuario/usuariodata';
import { SecundariaService } from '../datos/usuario/actisecundata.service';
import { InsumoService } from '../datos/usuario/insumodata.service';
import { UsuarioService } from '../datos/usuario/usuario.service';

@Component({
  selector: 'app-bitacoras',
  templateUrl: './bitacoras.page.html',
  styleUrls: ['./bitacoras.page.scss'],
})
export class BitacorasPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver()
  cod_bita: any;
  fecha: any;
  responsable: any;
  rutinarias: any;
  no_rutinarias: any;
  num_operarios: any;
  insumos: any;
  observa: any;
  // evidencia: string
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private bitacoraservice: BitacoraService,
    public secundariaservice: SecundariaService,
    public insumoservice: InsumoService,
    public usuarioservice: UsuarioService,
  ) { 
    this.form = this.formBuilder.group({
      cod_bita: [0],
      fecha: ['', Validators.compose([Validators.required])],
      responsable: ['', Validators.compose([Validators.required])],
      rutinarias: ['', Validators.compose([Validators.required])],
      no_rutinarias: ['', Validators.compose([Validators.required])],
      num_operarios: ['', Validators.compose([Validators.required])],
      insumos: ['', Validators.compose([Validators.required])],
      observa: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      // evidencia: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })
  }

  ngOnInit() {
    this.secundariaservice.obtenerSecundarias();
    this.insumoservice.obtenerInsumos();
    this.usuarioservice.obtenerUsuarios();
  }

  crearBitacora(){
    this.bitacoraservice.guardarBitacora(this.form);
  }
}
