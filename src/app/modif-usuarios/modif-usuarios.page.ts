import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FichaService } from '../datos/usuario/ficha.service';
import { RoldataService } from '../datos/usuario/roldata.service';
import { UsuarioService } from '../datos/usuario/usuario.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-modif-usuarios',
  templateUrl: './modif-usuarios.page.html',
  styleUrls: ['./modif-usuarios.page.scss'],
})
export class ModifUsuariosPage implements OnInit {
  usuarioObservable=UsuarioData.getUsuarioObserver();
  di: any;
  fecha: any;
  nombres: any;
  apellidos: any;
  correo: any;
  contrasena: any;
  rol: any;
  ficha: any;
  codactual: any;
  form: FormGroup;
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public roldataservice: RoldataService,
    public fichaservice: FichaService,
    private usuarioservice: UsuarioService
  ) {
    this.form = this.formBuilder.group({
      di: ['', Validators.compose([Validators.required])],
      fecha: ['', Validators.compose([Validators.required])],
      nombres: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      apellidos: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      correo: ['', Validators.compose([Validators.required])],
      contrasena: ['', Validators.compose([Validators.required])],
      rol: ['', Validators.compose([Validators.required])],
      ficha: ['', Validators.compose([Validators.required])]
    })

    this.route.params.subscribe((param: any) =>{
      this.di = param.di;
      this.codactual = param.di;
      const usuarioModificar = usuarioservice.getUsuarios().usuarios.find(usuario => usuario.di === this.di)
      if (usuarioModificar !== undefined) {
        this.isEdit = true;
        this.form.get("di")?.setValue(usuarioModificar.di);
        this.form.get("fecha")?.setValue(usuarioModificar.fecha.split(' '[0]));
        this.form.get("nombres")?.setValue(usuarioModificar.nombres);
        this.form.get("apellidos")?.setValue(usuarioModificar.apellidos);
        this.form.get("correo")?.setValue(usuarioModificar.correo);
        this.form.get("contrasena")?.setValue(usuarioModificar.contrasena);
        this.form.get("rol")?.setValue(usuarioModificar.rol);
        this.form.get("ficha")?.setValue(usuarioModificar.ficha);
      }
    })
   }

  ngOnInit() {
    this.roldataservice.obtenerRoles()
    this.fichaservice.obtenerFichas()
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  crearUsuario() {
    if (this.isEdit) {
      this.usuarioservice.modificarUsuario(this.form, this.codactual);
    }else {
      this.usuarioservice.guardarUsuario(this.form);
    }
  }
}
