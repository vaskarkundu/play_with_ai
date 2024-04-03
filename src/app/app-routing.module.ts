import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TraslatorComponent } from './components/traslator/traslator.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'traslator',
    component: TraslatorComponent,
  },

  //   {
  //     path: 'auth',
  //     loadChildren: () =>
  //       import('./modules/auth/auth.module').then((m) => m.AuthModule),
  //   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
