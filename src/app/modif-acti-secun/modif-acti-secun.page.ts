import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SecundariaService } from '../datos/usuario/actisecundata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-acti-secun',
  templateUrl: './modif-acti-secun.page.html',
  styleUrls: ['./modif-acti-secun.page.scss'],
})
export class ModifActiSecunPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver()
  cod_secund: any;
  fecha: any;
  nom_acti_sec: any;
  codactual: any;
  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private actisecundataservice: SecundariaService
  ) {
    this.form = this.formBuilder.group({
      cod_secund: ['', Validators.compose([Validators.required])],
      fecha: ['', Validators.compose([Validators.required])],
      nom_acti_sec: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })

    this.route.params.subscribe((param: any) => {
      this.cod_secund = param.cod_secund;
      this.codactual = param.cod_secund;
      const secundariaModificar = actisecundataservice.getSecundarias().secundarias.find(secundaria => secundaria.cod_secund === this.cod_secund)
      if (secundariaModificar !== undefined) {
        this.isEdit = true;
        this.form.get("cod_secund")?.setValue(secundariaModificar.cod_secund);
        this.form.get("fecha")?.setValue(secundariaModificar.fecha.split(' ')[0]);
        this.form.get("nom_acti_sec")?.setValue(secundariaModificar.nom_acti_sec);
      }
    })
  }

  ngOnInit() {
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  crearSecundaria() {
    if (this.isEdit) {
      this.actisecundataservice.modificarSecundaria(this.form, this.codactual);
    } else {
      this.actisecundataservice.guardarSecundaria(this.form);
    }
  }

}
