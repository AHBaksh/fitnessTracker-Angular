import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-tracking-bmi',
  templateUrl: './tracking-bmi.component.html',
  styleUrls: ['./tracking-bmi.component.css']
})
export class TrackingBmiComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  weightData:any
  weightKg:number =0
  message=''
  BMI:number =0
  inputHeight:number =0;
  toggle=false;
  ngOnInit(): void {
    this.dataservice.getWeight().subscribe(data =>{
      this.weightData = data
      this.weightKg = this.weightData[0].value / 2.205
    })
  }

  clickToggle(){

    this.toggle= true
  }
  

  calculate(){

    if(isNaN(Number(this.inputHeight)) || Number(this.inputHeight) <=0 ){
      return this.message = 'Please enter a number higher than 0'
    }else{
      this.message =''
      this.BMI = (this.weightKg / Number(this.inputHeight)) / Number(this.inputHeight)
    this.clickToggle()
    return this.BMI

    }
    
  }

}
