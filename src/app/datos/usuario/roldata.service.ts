import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Injectable({
  providedIn: 'root'
})
export class RoldataService {

  private roles: BehaviorSubject<IRolesData> = new BehaviorSubject({ roles: [] } as IRolesData);

  public guardarRol(form: FormGroup) {
    if (form.valid) {
      const rol = form.value;
      this.conexionService.crearRol(rol).subscribe((res: any) => {
        form.reset();
        alert('rol ingresado correctamente');
        this.obtenerRoles();
      }, (error: any) => {
        console.log("ERROR ===", error);
      })
    } else {
      alert("faltan campos por llenar");
    }
  }

  public obtenerRoles() {
    this.conexionService.verRoles().subscribe((res: any) => {
      const nuevaData: IRolesData={
        roles: res
      }
      this.roles.next(nuevaData);
    }, (error: any) => {
      console.log("ERROR ===", error);
    })
  }

  public eliminarRol(cod_rol: string) {
    this.conexionService.eliminarRol(cod_rol).subscribe((res: any) => {
      this.obtenerRoles();
    }, (error: any) => {
      console.log('ERROR', error)
    })
  }

  public getRoles(): IRolesData {
    return this.roles.value
  }

  public getRolObserver(): Observable<IRolesData> {
    return this.roles.asObservable()
  }

  public modificarRol(form: FormGroup, codactual: string){
    if(form.valid){
    const rol = form.value;
    rol["codactual"] = codactual
    this.conexionService.actualizarRol(rol).subscribe((res: any)=>{
      console.log("exitoso");
      this.obtenerRoles();
    },(error:any)=> {
      console.log('ERROR', error)
    })
  }
}

  constructor(private conexionService: ConexionService) { }
}

interface IRoles {
  fecha: string,
  cod_rol: string,
  nom_rol: string
}

interface IRolesData {
  roles: IRoles[]
}