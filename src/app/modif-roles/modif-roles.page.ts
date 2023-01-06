import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoldataService } from '../datos/usuario/roldata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-roles',
  templateUrl: './modif-roles.page.html',
  styleUrls: ['./modif-roles.page.scss'],
})
export class ModifRolesPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver();
  fecha: any;
  cod_rol: any;
  nom_rol: any;
  codactual: any;
  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private roldataservice: RoldataService
  ) {
    this.form = this.formBuilder.group({
      fecha: ['', Validators.compose([Validators.required])],
      cod_rol: ['', Validators.compose([Validators.required])],
      nom_rol: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })

    this.route.params.subscribe((param: any) => {
      this.cod_rol = param.cod_rol;
      this.codactual = param.cod_rol;
      const rolModificar = roldataservice.getRoles().roles.find(rol => rol.cod_rol === this.cod_rol)
      if (rolModificar !== undefined) {
        this.isEdit = true;
        this.form.get("fecha")?.setValue(rolModificar.fecha.split(' ')[0]);
        this.form.get("cod_rol")?.setValue(rolModificar.cod_rol);
        this.form.get("nom_rol")?.setValue(rolModificar.nom_rol);
      }
    })
  }

  ngOnInit() {
  }

  crearRol() {
    if (this.isEdit) {
      this.roldataservice.modificarRol(this.form, this.codactual);
    } else {
      this.roldataservice.guardarRol(this.form);
    }
  }
}
