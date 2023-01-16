import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InsumoService } from '../datos/usuario/insumodata.service';
import { ProcedenciaService } from '../datos/usuario/procedenciadata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-insumos',
  templateUrl: './modif-insumos.page.html',
  styleUrls: ['./modif-insumos.page.scss'],
})
export class ModifInsumosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  cod_insumo: any;
  codactual: any;
  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public insumodataservice: InsumoService,
    public procedenciadataservice: ProcedenciaService
  ) { 
    this.form = this.formBuilder.group({
      fecha: ['', Validators.compose([Validators.required])],
      cod_insumo: [0], // '', Validators.compose([Validators.required])
      nom_insumo: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      caracteristicas: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      estado: ['', Validators.compose([Validators.required])],
      procedencia: ['', Validators.compose([Validators.required])],
    })

    this.route.params.subscribe((param: any) => {
      this.cod_insumo = param.cod_insumo;
      this.codactual = param.cod_insumo;
      const insumoModificar = insumodataservice.getInsumos().insumos.find(insumo => insumo.cod_insumo === this.cod_insumo)
      if (insumoModificar !== undefined) {
        this.isEdit = true;
        this.form.get("fecha")?.setValue(insumoModificar.fecha.split(' ')[0]);
        this.form.get("cod_insumo")?.setValue(insumoModificar.cod_insumo);
        this.form.get("nom_insumo")?.setValue(insumoModificar.nom_insumo);
        this.form.get("caracteristicas")?.setValue(insumoModificar.caracteristicas);
        this.form.get("estado")?.setValue(insumoModificar.estado);
        this.form.get("procedencia")?.setValue(insumoModificar.procedencia);
      }
    })
  }

  ngOnInit() {
    this.procedenciadataservice.obtenerProcedencias();
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  crearInsumo() { console.log(this.form.value)
    if (this.isEdit) {
      this.insumodataservice.modificarInsumo(this.form, this.codactual);
    } else {
      this.insumodataservice.guardarInsumo(this.form);
    }
  }

}
