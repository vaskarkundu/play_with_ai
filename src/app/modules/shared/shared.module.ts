import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { NotecardComponent } from './notecard/notecard.component';

@NgModule({
  declarations: [
    HeadingComponent,
    NavigationButtonComponent,
    NotecardComponent,
  ],
  imports: [
    CommonModule, // for material lib
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
  exports: [HeadingComponent, NavigationButtonComponent, NotecardComponent],
})
export class SharedModule {}
