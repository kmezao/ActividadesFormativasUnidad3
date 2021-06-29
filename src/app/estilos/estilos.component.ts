import { Component } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent {

  visual = {
    'estilo1 estilo2': true
  };

  agregar(){
    this.visual['estilo1 estilo2']=true
  }

  borrar(){
    this.visual['estilo1 estilo2']=false
  }

}
