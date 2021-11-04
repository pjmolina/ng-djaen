import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LugaresComponent } from './lugares/lugares.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

export const adminRoutes: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'usuarios', component: UsuariosComponent },

  // ejemplo
  // {
  //   path: 'municipios',
  //   children: [
  //     { path: '', component: MunicipiosListComponent },
  //     { path: 'crear', component: MunicipioCreateComponent },
  //     {
  //       path: 'ver/:id',
  //       component: MunicipioDetailComponent,
  //       data: { modo: 'ver' },
  //     },
  //     {
  //       path: 'editar/:id',
  //       component: MunicipioDetailComponent,
  //       data: { modo: 'editar' },
  //     },
  //     { path: 'borrar/:id', component: MunicipioDeleteComponent },
  //   ],
  // },
];

@NgModule({
  declarations: [UsuariosComponent, LugaresComponent],
  imports: [CommonModule, RouterModule.forChild(adminRoutes), SharedModule],
})
export class AdminModule {}
