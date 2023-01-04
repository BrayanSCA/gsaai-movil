import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaService } from '../datos/usuario/ficha.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-ficha',
  templateUrl: './modif-ficha.page.html',
  styleUrls: ['./modif-ficha.page.scss'],
})
export class ModifFichaPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver()
  fecha: any;
  cod_ficha: any;
  nom_ficha: any;
  codactual: any;
  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private fichaservice: FichaService
  ) {
    this.form = this.formBuilder.group({
      fecha: ['', Validators.compose([Validators.required])],
      cod_ficha: ['', Validators.compose([Validators.required])],
      nom_ficha: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })

    this.route.params.subscribe((param: any) => {
      this.cod_ficha = param.cod_ficha;
      this.codactual = param.cod_ficha;
      const fichaModificar = fichaservice.getFichas().fichas.find(ficha => ficha.cod_ficha === this.cod_ficha)
      if (fichaModificar !== undefined) {
        this.isEdit = true;
        this.form.get("fecha")?.setValue(fichaModificar.fecha.split(' ')[0]);
        this.form.get("cod_ficha")?.setValue(fichaModificar.cod_ficha);
        this.form.get("nom_ficha")?.setValue(fichaModificar.nom_ficha);
      }
    })
  }

  ngOnInit() {
  }

  crearFicha() {
    if (this.isEdit) {
      this.fichaservice.modificarFicha(this.form, this.codactual);
    } else {
      this.fichaservice.guardarFicha(this.form);
    }
  }

}
