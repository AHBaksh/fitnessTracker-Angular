import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingBmiComponent } from './tracking-bmi.component';

describe('TrackingBmiComponent', () => {
  let component: TrackingBmiComponent;
  let fixture: ComponentFixture<TrackingBmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingBmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingBmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
