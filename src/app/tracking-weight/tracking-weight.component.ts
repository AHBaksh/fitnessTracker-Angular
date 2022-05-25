import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-tracking-weight',
  templateUrl: './tracking-weight.component.html',
  styleUrls: ['./tracking-weight.component.css'],
})
export class TrackingWeightComponent implements OnInit {
  weightData: any;
  weightistoryData: any;
  wHD: any;
  wData: number = 0;
  currentWeightEntry: number = 0;
  date: number | string = '00/00/0000';
  targetWeightEntry: number = 0;
  message = '';
  constructor(public dataservice: DataService) {}

  ngOnInit(): void {
    this.dataservice.getWeightHistory().subscribe((data) => {
      this.weightistoryData = data;
    });
    this.dataservice.getWeight().subscribe((data) => {
      this.weightData = data;
      this.currentWeightEntry = this.weightData[0].value;
      this.targetWeightEntry = this.weightData[1].value;
    });
    this.date = this.dataservice.getDateData();
  }

  updateFunc(id: number) {
    const objBody = { id: id, name: '', value: Number(this.wData) };
    this.dataservice.updateGoals(id, objBody).subscribe();
  }

  updateWeightValue(id: number) {
    if (isNaN(Number(this.currentWeightEntry))) {
      (this.message = 'Please enter a number');
    } else {
      this.message = '';
      const objUpdateW = { id: id, value: Number(this.currentWeightEntry) };
      const objUpdateWTracking = {
        id: this.weightistoryData[0].series.length + 1,
        name: this.date,
        value: Number(this.currentWeightEntry),
      };
      this.wHD = this.weightistoryData;
      this.wHD[0].series.push(objUpdateWTracking);
      this.dataservice.updateweight(id, objUpdateW).subscribe();
      this.dataservice.updateWeightHistory(this.wHD[0]).subscribe();
    }
  }

  updateTargetWeightValue(id: number) {
    if (isNaN(Number(this.targetWeightEntry))) {
      (this.message = 'Please enter a number');
    } else {
    const objUpdateW = { id: id, value: Number(this.targetWeightEntry) };
    this.dataservice.updateweight(id, objUpdateW).subscribe();
    }
  }
}
