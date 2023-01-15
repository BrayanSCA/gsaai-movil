import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EntradaMpService } from '../datos/funciones/entradamp.service';
import { MpService } from '../datos/usuario/mpdata.service';
import { ProcedenciaService } from '../datos/usuario/procedenciadata.service';
import UsuarioData from '../datos/usuario/usuariodata';
// import ProcedenciaService from '../datos/funciones/entradamp.service';

@Component({
  selector: 'app-mp-entrada',
  templateUrl: './mp-entrada.page.html',
  styleUrls: ['./mp-entrada.page.scss'],
})
export class MpEntradaPage implements OnInit {
  usuarioObservable = UsuarioData.getUsuarioObserver()
  forms: FormGroup[] = [];
  calculoOK: boolean = false

  constructor(
    private route: ActivatedRoute,
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
// todo OK, si hace falta ajustar el calculo, el if de aca abajo, lo haces vos.. ya me tengo que ir muchas gracias sensei
      console.log(total)
      // 300 numero inventado por mi
      //if (total > 3000) { // comentado para probarlo al servicio
        this.calculoOK = true; // solo cuando todo esta OK, es que se puede enviar al servicio
      //}
    }
  }

  trackForm(index: number, formulario: FormGroup) {
    return index
  }
}
