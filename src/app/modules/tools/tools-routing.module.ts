import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraslatorComponent } from './traslator/traslator.component';

const routes: Routes = [
  {
    path: 'traslator',
    component: TraslatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
