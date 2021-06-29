import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent{

  lista:string[]=["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

  nombre = 'Juan Perez';
  edad = 120;

  elementos = [
    {codigo: 1001, nombreProducto: "Tallarines", precio: 1000},
    {codigo: 1002, nombreProducto:"Bebidas", precio: 1600}]
  
  fecha = new Date();

  saldo = 1000;
}
