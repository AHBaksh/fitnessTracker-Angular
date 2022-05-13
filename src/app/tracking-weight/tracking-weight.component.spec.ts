import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingWeightComponent } from './tracking-weight.component';

describe('TrackingWeightComponent', () => {
  let component: TrackingWeightComponent;
  let fixture: ComponentFixture<TrackingWeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingWeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
