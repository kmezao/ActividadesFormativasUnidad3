import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { NotasComponent } from './notas/notas.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { EstilosComponent } from './estilos/estilos.component';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NotasComponent,
    DirectivasComponent,
    PipesComponent,
    EstilosComponent,
    CrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
