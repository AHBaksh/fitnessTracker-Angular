import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  constructor(public dataservice:DataService) { }

  goalList:any
  weight:any
  currentWeight:number =0;
  targetWeight:number =0;
  weightTolose:number =0;
  ngOnInit(): void {
    
   this.dataservice.getWeight().subscribe((data) => {
    this.weight = data;
    this.currentWeight= this.weight[0].value
    this.targetWeight= this.weight[1].value
    this.designatedTotal = this.weight[2].value - this.weight[1].value
    this.weightTolose = this.weight[0].value - this.weight[1].value
    this.goalList = [{id:1, name:'',value: this.weight[2].value - this.weight[0].value}]
  });  
   
 }
 
 label:string ='Weight lost so far (lb)'
 designatedTotal:number = 0
 



}
