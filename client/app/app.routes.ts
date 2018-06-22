import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { CadastroComponent } from './cadastro/cadastro.component';

const appRoutes: Routes  = [
  { path: '', component: ListaComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);