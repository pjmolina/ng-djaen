import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'usuarios', component: UsuariosComponent },
];

@NgModule({
  declarations: [UsuariosComponent, LugaresComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
