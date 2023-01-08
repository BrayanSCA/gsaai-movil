import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EntradaMpService } from '../datos/funciones/entradamp.service';
import UsuarioData from '../datos/usuario/usuariodata';
// import ProcedenciaService from '../datos/funciones/entradamp.service';

@Component({
  selector: 'app-mp-entrada',
  templateUrl: './mp-entrada.page.html',
  styleUrls: ['./mp-entrada.page.scss'],
})
export class MpEntradaPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver()
  cod_entra_mp: any;
  fecha: any;
  nom_mp: any;
  peso: any;
  procedencia: any;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private entradampservice: EntradaMpService,
    // public procedenciadataservice: ProcedenciaService
  ) {
    this.form = this.formBuilder.group({
      cod_entra_mp: [0],
      fecha: ['', Validators.compose([Validators.required])],
      nom_mp: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      peso: ['', Validators.compose([Validators.required])],
      procedencia: ['', Validators.compose([Validators.required])]
    })

    /*     this.route.params.subscribe((param: any) => {
          this.cod_entra_mp = param.cod_entra_mp;
          const entradampModificar = entradampservice.getEntradaMp().entradamps.find(entradamp => entradamp.cod_entra_mp === this.cod_entra_mp)
          if (entradampModificar !== undefined) {
            this.isEdit = true;
            this.form.get("cod_procedencia")?.setValue(procedenciaModificar.cod_procedencia);
            this.form.get("nom_procedencia")?.setValue(procedenciaModificar.nom_procedencia);
          }
        }) */
    const validar = entradampservice.getEntradaMp().entradamps.find(entradamp => entradamp.cod_entra_mp === this.cod_entra_mp)
    this.form.get("cod_entra_mp")?.setValue(validar);
    this.form.get("fecha")?.setValue(validar);
    this.form.get("nom_mp")?.setValue(validar);
    this.form.get("peso")?.setValue(validar);
    this.form.get("procedencia")?.setValue(validar);
  }

  ngOnInit() {
  }

  crearEntradaMp(){
    this.entradampservice.guardarEntradaMp(this.form);
  }
}
