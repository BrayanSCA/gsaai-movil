import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MejoradorService } from '../datos/usuario/mejoradordata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-mejoradores',
  templateUrl: './modif-mejoradores.page.html',
  styleUrls: ['./modif-mejoradores.page.scss'],
})
export class ModifMejoradoresPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  cod_mejorador: any;
  nom_mejorador: any;
  caracteristicas: any;
  codactual: any
  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private mejoradordataservice: MejoradorService
  ) {
    this.form = this.formBuilder.group({
      cod_mejorador: ['', Validators.compose([Validators.required])],
      nom_mejorador: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      caracteristicas: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })

    this.route.params.subscribe((param: any) => {
      this.cod_mejorador = param.cod_mejorador;
      this.codactual = param.cod_mejorador;
      const mejoradorModificar = mejoradordataservice.getMejoradores().mejoradores.find(mejorador => mejorador.cod_mejorador === this.cod_mejorador)
      if (mejoradorModificar !== undefined) {
        this.isEdit = true;
        this.form.get("cod_mejorador")?.setValue(mejoradorModificar.cod_mejorador);
        this.form.get("nom_mejorador")?.setValue(mejoradorModificar.nom_mejorador);
        this.form.get("caracteristicas")?.setValue(mejoradorModificar.caracteristicas);
      }
    })
   }

  ngOnInit() {
  }

  crearMejorador() {
    if (this.isEdit) {
      this.mejoradordataservice.modificarMejorador(this.form, this.codactual);
    } else {
      this.mejoradordataservice.guardarMejorador(this.form);
    }
  }
}
