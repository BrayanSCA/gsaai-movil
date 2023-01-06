import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProcedenciaService } from '../datos/usuario/procedenciadata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-procedencias',
  templateUrl: './modif-procedencias.page.html',
  styleUrls: ['./modif-procedencias.page.scss'],
})
export class ModifProcedenciasPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver()
  cod_procedencia: any;
  nom_procedencia: any;
  form: FormGroup;
  isEdit: boolean=false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private procedenciadataservice: ProcedenciaService
  ) {
    this.form = this.formBuilder.group({
      cod_procedencia: [0],
      nom_procedencia: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    })

    this.route.params.subscribe((param: any) => {
      this.cod_procedencia = param.cod_procedencia;
      const procedenciaModificar = procedenciadataservice.getProcedencias().procedencias.find(procedencia => procedencia.cod_procedencia === this.cod_procedencia)
      if (procedenciaModificar !== undefined) {
        this.isEdit = true;
        this.form.get("cod_procedencia")?.setValue(procedenciaModificar.cod_procedencia);
        this.form.get("nom_procedencia")?.setValue(procedenciaModificar.nom_procedencia);
      }
    })
   }

  ngOnInit() {
  }

  crearProcedencia() {
    if (this.isEdit) {
      this.procedenciadataservice.modificarProcedencia(this.form);
    } else {
      this.procedenciadataservice.guardarProcedencia(this.form);
    }
  }
}
