import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MpService } from '../datos/usuario/mpdata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-materias-p',
  templateUrl: './modif-materias-p.page.html',
  styleUrls: ['./modif-materias-p.page.scss'],
})
export class ModifMateriasPPage implements OnInit {
usuarioObservable=UsuarioData.getUsuarioObserver()
cod_mp: any;
nombre_mp: any;
relacion_cn: any;
codactual: any;
form: FormGroup;
isEdit: boolean=false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private mpdataservice: MpService
  ) {
    this.form = this.formBuilder.group({
      cod_mp: ['', Validators.compose([Validators.required])],
      nombre_mp: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      relacion_cn: ['', Validators.compose([Validators.required])],
    })

    this.route.params.subscribe((param: any) => {
      this.cod_mp = param.cod_mp;
      this.codactual = param.cod_mp;
      const mpModificar = mpdataservice.getMps().mps.find(mp => mp.cod_mp === this.cod_mp)
      if (mpModificar !== undefined) {
        this.isEdit = true;
        this.form.get("cod_mp")?.setValue(mpModificar.cod_mp);
        this.form.get("nombre_mp")?.setValue(mpModificar.nombre_mp);
        this.form.get("relacion_cn")?.setValue(mpModificar.relacion_cn);
      }
    })
   }

  ngOnInit() {
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  crearMp() {
    if (this.isEdit) {
      this.mpdataservice.modificarMp(this.form, this.codactual);
    } else {
      this.mpdataservice.guardarMp(this.form);
    }
  }
}
