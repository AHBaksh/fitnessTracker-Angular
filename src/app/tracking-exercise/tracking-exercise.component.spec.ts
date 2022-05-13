import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingExerciseComponent } from './tracking-exercise.component';

describe('TrackingExerciseComponent', () => {
  let component: TrackingExerciseComponent;
  let fixture: ComponentFixture<TrackingExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingExerciseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
