import 'rxjs/add/operator/map';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }   from './app.component';
import { routing }   from './app.routes';
import { FotoModule } from './foto/foto.module';
import { PainelModule } from './painel/painel.module';

import { CadastroComponent }   from './cadastro/cadastro.component';
import { ListaComponent }   from './lista/lista.component'; 

@NgModule({
  imports:      [ BrowserModule, FotoModule, HttpModule, PainelModule, routing ],
  declarations: [ AppComponent, CadastroComponent, ListaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
