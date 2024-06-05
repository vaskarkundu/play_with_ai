import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notecard',
  templateUrl: './notecard.component.html',
  styleUrls: ['./notecard.component.css'],
})
export class NotecardComponent {
  @Input() notes: string[] = [];
  @Input() header: string = '';
}
