import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {

  salida!: string;
  salida1!: string;
  notaPresentacion!: number;
  notaFinal!: number;

   formulario = new FormGroup({
      rut: new FormControl(''),
      nombre: new FormControl(''),
      notas: new FormGroup({
        nota1: new FormControl(''),
        nota2: new FormControl(''),
        nota3: new FormControl(''),
        nota4: new FormControl(''),
        nota5: new FormControl(''),
      })
   });

enviar(){
  let nota1 = parseInt(this.formulario.value.notas.nota1);
  let nota2 = parseInt(this.formulario.value.notas.nota2);
  let nota3 = parseInt(this.formulario.value.notas.nota3);
  let nota4 = parseInt(this.formulario.value.notas.nota4);
  let nota5 = parseInt(this.formulario.value.notas.nota5);

  if(nota1>=4 && nota2>=4 && nota3>=4 && nota4>=4 && nota5>=4){
    this.notaPresentacion = (nota1 + nota2 + nota3 + nota4)/4;
    this.notaFinal = (this.notaPresentacion * 0.7) + (nota5 * 0.3);
     if(this.notaFinal >=4){
       this.salida = "Notas parciales: "+ nota1 + " " + nota2 + " " + nota3 + " " + nota4;
       this.salida1 = "El alumno aprueba el curso con "+ this.notaFinal.toFixed(1);
     } else{
     this.salida = "El alumno reprueba el curso";
   }
  } else {
    this.salida = "El alumno reprueba el curso";
  }
}
}
