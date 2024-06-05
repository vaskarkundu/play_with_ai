import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsRoutingModule } from './tools-routing.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TraslatorComponent } from './traslator/traslator.component';
import { SharedModule } from '../shared/shared.module';
import { SummarizeComponent } from './summarize/summarize.component';

@NgModule({
  declarations: [TraslatorComponent, SummarizeComponent],
  imports: [
    CommonModule,
    ToolsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,

    // for material lib
    MatSlideToggleModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
  ],
})
export class ToolsModule {}
