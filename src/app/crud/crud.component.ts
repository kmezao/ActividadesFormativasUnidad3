import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent{

  prod: any ={
    codigo:'',
    nombre: '',
    precio: '',
  }
  productos = [
    {codigo:'1001', nombre:'Manzana', precio:'1000'},
    {codigo:'1002', nombre:'Naranja', precio: '900'},
    {codigo: '1003', nombre: 'Pera', precio: '2000'}
  ]

  verificarProductos(){
    return this.productos.length>0;
  }

  agregar(){
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == this.prod.codigo){
        alert('El producto no se ha ingresado porque existe');
        return;
      }
    }
    this.productos.push({codigo:this.prod.codigo, 
                        nombre:this.prod.nombre,
                        precio:this.prod.precio})
    this.prod.codigo='';
    this.prod.nombre='';
    this.prod.precio='';
    }

    seleccionar(prod:any){
      this.prod.codigo = prod.codigo;
      this.prod.nombre = prod.nombre;
      this.prod.precio = prod.precio;
    }

    eliminar(prod:any){
      for(let i=0; i<this.productos.length; i++){
        if(this.productos[i].codigo == prod.codigo){
          this.productos.splice(i,1);
          alert('El producto fue eliminado');
          return;
        }
    }
    alert('El producto no se encontro');
}

modificar(){
  for(let i=0; i<this.productos.length; i++){
    if(this.productos[i].codigo == this.prod.codigo){
      this.productos[i].nombre = this.prod.nombre;
      this.productos[i].precio = this.prod.precio;
      return;
    } 
  }
alert('El codigo no existe')
}

}
