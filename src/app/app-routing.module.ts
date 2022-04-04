import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'clientes',
    pathMatch: 'full'

  },
  {
    path: 'clientes',
    loadChildren: () => import('./cliente/cliente.module').then(module => module.ClienteModule),
  },

  {
    path: 'cuentas',
    loadChildren: () => import('./cuenta/cuenta.module').then(module => module.CuentaModule),
  },
  {
    path: 'movimientos',
    loadChildren: () => import('./movimiento/movimiento.module').then(module => module.MovimientoModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
