import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraslatorComponent } from './traslator.component';

describe('TraslatorComponent', () => {
  let component: TraslatorComponent;
  let fixture: ComponentFixture<TraslatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraslatorComponent]
    });
    fixture = TestBed.createComponent(TraslatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
