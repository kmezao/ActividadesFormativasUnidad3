import { Component } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  elementos = [{nombre: 'Diego', apellido:'Fuentealba', correo: 'dfuentealba@gmail.com'}, 
  {nombre: 'Pablo', apellido:'Rebolledo', correo: 'prebolledo@gmail.com'}, 
  {nombre: 'Juan', apellido:'Perez', correo: 'jperez@gmail.com'},
  {nombre: 'Maria', apellido:'Rivera', correo: 'mrivera@gmail.com'},
  {nombre: 'Camila', apellido: 'Alvarez', correo: 'calvarez@gmail.com'}
] ;

}
