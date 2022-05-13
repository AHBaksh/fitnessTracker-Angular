import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightLossChartComponent } from './weight-loss-chart.component';

describe('WeightLossChartComponent', () => {
  let component: WeightLossChartComponent;
  let fixture: ComponentFixture<WeightLossChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightLossChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightLossChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
