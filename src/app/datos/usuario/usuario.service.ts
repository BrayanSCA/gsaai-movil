import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios: BehaviorSubject<IUsuariosData> = new BehaviorSubject({ usuarios: [] } as IUsuariosData);

  public guardarUsuario(form: FormGroup) {
    if (form.valid) {
      const usuario = form.value;
      this.conexionService.crearUsuario(usuario).subscribe((res: any) => {
        form.reset();
        alert('Usuario ingresado correctamente');
        this.obtenerUsuarios();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerUsuarios() {
    this.conexionService.verUsuarios().subscribe((res: any) => {
      const nuevaData: IUsuariosData = {
        usuarios: res
      }
      this.usuarios.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarUsuario(di: string) {
    this.conexionService.eliminarUsuario(di).subscribe((res: any) => {
      this.obtenerUsuarios();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getUsuarios(): IUsuariosData {
    return this.usuarios.value
  }

  public getUsuariosObserver(): Observable<IUsuariosData> {
    return this.usuarios.asObservable()
  }

  public modificarUsuario(form: FormGroup, codactual: string) {
    if (form.valid) {
      const usuario = form.value;
      usuario["codactual"] = codactual 
      this.conexionService.actualizarUsuario(usuario).subscribe((res: any) => {
        console.log("exitoso");
        alert('Usuario modificado correctamente');
        this.obtenerUsuarios();
      }, (error: any) => {
        console.log('ERROR', error)
      })
    }
  }

  constructor(private conexionService: ConexionService) { }
}

interface IUsuarios {
  di: string,
  fecha: string,
  nombres: string,
  apellidos: string,
  correo: string,
  contrasena: string,
  rol: string,
  ficha:string
}

interface IUsuariosData {
  usuarios: IUsuarios[]
}
