import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntradaInsumoService } from '../datos/funciones/entradainsumo.service';
import { InsumoService } from '../datos/usuario/insumodata.service';
import { UsuarioService } from '../datos/usuario/usuario.service';
import UsuarioData from '../datos/usuario/usuariodata';


@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.page.html',
  styleUrls: ['./insumos.page.scss'],
})
export class InsumosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  cod_entra_insu: any;
  fecha: any;
  responsable: any;
  nom_insumo: any;
  cantidad: any;
  estado: any;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private insumoentradaservice: EntradaInsumoService,
    public insumoservice: InsumoService,
    public usuarioservice: UsuarioService
  ) { 
    this.form = this.formBuilder.group({
      cod_entra_insu: [0],
      fecha: ['', Validators.compose([Validators.required])],
      responsable: ['', Validators.compose([Validators.required])],
      nom_insumo: ['', Validators.compose([Validators.required])],
      cantidad: ['', Validators.compose([Validators.required])],
      estado: ['', Validators.compose([Validators.required])],
    })
  }

  ngOnInit() {
    this.insumoservice.obtenerInsumos();
    this.usuarioservice.obtenerUsuarios();
  }

  crearEntradaInsumo(){
    this.insumoentradaservice.guardarEntradaInsumo(this.form);
  }
}
