import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent implements OnInit {

  lista:string[]=["Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];

  estado = false;
  constructor() { }

  ngOnInit(): void {
  }

}
