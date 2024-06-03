import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';

@NgModule({
  declarations: [HeadingComponent, NavigationButtonComponent],
  imports: [CommonModule],
  exports: [HeadingComponent, NavigationButtonComponent],
})
export class SharedModule {}
