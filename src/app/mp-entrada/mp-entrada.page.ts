import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgModel, Validators } from '@angular/forms';
import { EntradaMpService } from '../datos/funciones/entradamp.service';
import { MpService } from '../datos/usuario/mpdata.service';
import { ProcedenciaService } from '../datos/usuario/procedenciadata.service';
import UsuarioData from '../datos/usuario/usuariodata';

@Component({
  selector: 'app-mp-entrada',
  templateUrl: './mp-entrada.page.html',
  styleUrls: ['./mp-entrada.page.scss'],
})
export class MpEntradaPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver()
  forms: FormGroup[] = [];
  calculoOK: boolean = false
  mpSelect: any;
  

  constructor(
    private formBuilder: FormBuilder,
    private entradampservice: EntradaMpService,
    public procedenciaService: ProcedenciaService,
    public mpService: MpService

  ) { }

  ngOnInit() {
    this.construirFormulario()

    this.mpService.obtenerMps()
    this.procedenciaService.obtenerProcedencias()
  }

  public construirFormulario() {
    const form = this.formBuilder.group({
      fecha: ['', Validators.compose([Validators.required])],
      peso: ['', Validators.compose([Validators.required])],
      relacion_cn: ['', Validators.compose([Validators.required])],
      materia_prima_id: ['', Validators.compose([Validators.required])],
      procedencia_id: ['', Validators.compose([Validators.required])],
      total_relacion_cn: [0]
    })

    this.forms.push(form)

  }

  public eliminarFormulario(index: number) {
    this.forms = this.forms.filter((form, i) => i !== index);
  }

  cerrarSesion(){
    UsuarioData.cerrarsesion()
  }

  crearEntradaMp(){
    console.log(this.calculoOK)
    if (this.calculoOK) {
      this.entradampservice.guardarEntradaMp(this.forms);
    }
  }

  calcular() {
    const invalid = this.forms.some(form => !form.valid)
    console.log(invalid)

    if (!invalid) {
      const pesoTotal = this.forms.map(form => Number(form.value.peso)).reduce((a, b) => a + b)

      const total = this.forms.map(form => {
        const {value: {
          peso,
          relacion_cn,
        }} = form
        const calculoUnaSolaMateria = (Number(peso) / pesoTotal) * Number(relacion_cn)
        console.log('calculo de uno', calculoUnaSolaMateria)
        form.get('total_relacion_cn')?.setValue(calculoUnaSolaMateria)

        return calculoUnaSolaMateria
      }).reduce((a, b) => a + b)
      console.log(total)
        this.calculoOK = true; // solo cuando todo esta OK, es que se puede enviar al servicio
    }
  }

  trackForm(index: number, formulario: FormGroup) {
    return index
  }

/*   setValueMp() {
    console.log("mpSelect", this.mpSelect);
    
  } */
}
