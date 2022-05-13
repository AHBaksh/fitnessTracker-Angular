import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-weight-loss-chart',
  templateUrl: './weight-loss-chart.component.html',
  styleUrls: ['./weight-loss-chart.component.css']
})
export class WeightLossChartComponent implements OnInit {
  weightData:any;
  dd: Date = new Date;
  mm:Date = new Date;
  yyyy:Date = new Date;

  xAxis: boolean = true;
  yAxis: boolean = true;
  yScaleMin:number = 0;
  showXAxisLabel:boolean=true
  showYAxisLabel:boolean = true
  xAxisLabel:string = 'Date (dd/mm/yyyy)'
  yAxisLabel:string = 'Weight (lb)'

  

  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getWeightHistory().subscribe( data =>{
      this.weightData = data;
      this.yScaleMin = this.weightData[0].series[this.weightData[0].series.length -1].value -20;
      console.log(this.weightData)
    })

    }

  saveCurrentWeight(){


  }


}
