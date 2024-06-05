import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TraslatorComponent } from './traslator/traslator.component';
import { SummarizeComponent } from './summarize/summarize.component';

const routes: Routes = [
  {
    path: 'traslator',
    component: TraslatorComponent,
  },
  {
    path: 'summarization',
    component: SummarizeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolsRoutingModule {}
