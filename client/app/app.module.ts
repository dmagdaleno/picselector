import 'rxjs/add/operator/map';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }      from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FotoModule }        from './foto/foto.module';
import { ListaComponent }    from './lista/lista.component'; 
import { PainelModule }      from './painel/painel.module';
import { routing }           from './app.routes';

@NgModule({
  imports: [ BrowserModule, FotoModule, HttpModule, PainelModule, routing, FormsModule,
             ReactiveFormsModule ],
  declarations: [ AppComponent, CadastroComponent, ListaComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
