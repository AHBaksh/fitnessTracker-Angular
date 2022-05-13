
import { Component,  OnInit} from '@angular/core';
import { DataService } from '../data/data.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  nameData: string = '';
  valueData: string = '';

  animations:boolean =false;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showGridLines: boolean = false;
  barPadding:number =50;
  showXAxisLabel:boolean=true
  showYAxisLabel:boolean = true
  xAxisLabel:string = 'Exercise'
  yAxisLabel:string = 'Hours'
  yScaleMax:number = 160

  constructor(public dataservice: DataService) {}

  msgTure = false;
  dataList: any;
  favour:string ='Cardio'
  maxHours:number =0;
  totalHours:number =0;

  ngOnInit(): void {
     this.dataservice.getData().subscribe((data) => {
      this.dataList = data;
      this.maxHours =this.dataList[0].value
      this.totalHours =0;
      for(let b of this.dataList){
        if(b.value > this.maxHours){
          this.maxHours = b.value
          this.favour =b.name
        }
        this.totalHours = this.totalHours + b.value
        console.log(this.totalHours)
      }
    });
    
  }
  
  

  formData() {
    

    const newObj: any = {
      id: this.dataList.length + 1,
      name: this.nameData,
      value: Number(this.valueData),
    };
    console.log(this.dataList)
    for (let i = 0; i < this.dataList.length - 1; i++) {
      if (this.dataList[i].name.toLowerCase() === this.nameData.toLowerCase()) {
        return alert('record already exists');
      }
    }

    this.dataservice.createData(newObj).subscribe((data) => {
      this.ngOnInit()
      console.log(this.dataList )
      this.nameData = '';
      this.valueData = '';
      
      this.msgTure = true;
    });

    

    
  }
}
