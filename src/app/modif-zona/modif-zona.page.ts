import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import UsuarioData from '../datos/usuario/usuariodata';
import { ZonaService } from '../datos/usuario/zonadata.service';

@Component({
  selector: 'app-modif-zona',
  templateUrl: './modif-zona.page.html',
  styleUrls: ['./modif-zona.page.scss'],
})
export class ModifZonaPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  fecha: any;
  cod_zona: any;
  nom_zona: any;
  codactual: any;
  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private zonaservice: ZonaService
  ) {
    this.form = this.formBuilder.group({
      fecha: ['', Validators.compose([Validators.required])],
      cod_zona: ['', Validators.compose([Validators.required])],
      nom_zona: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })

    this.route.params.subscribe((param: any) => {
      this.cod_zona = param.cod_zona;
      this.codactual = param.cod_zona;
      const zonaModificar = zonaservice.getZonas().zonas.find(zona => zona.cod_zona === this.cod_zona)
      if (zonaModificar !== undefined) {
        this.isEdit = true;
        this.form.get("fecha")?.setValue(zonaModificar.fecha.split(' ')[0]);
        this.form.get("cod_zona")?.setValue(zonaModificar.cod_zona);
        this.form.get("nom_zona")?.setValue(zonaModificar.nom_zona);
      }
    })
   }

  ngOnInit() {
  }

  crearZona() {
    if (this.isEdit) {
      this.zonaservice.modificarZona(this.form, this.codactual);
    } else {
      this.zonaservice.guardarZona(this.form);
    }
  }

}
