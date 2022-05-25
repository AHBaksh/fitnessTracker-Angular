import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-tracking-exercise',
  templateUrl: './tracking-exercise.component.html',
  styleUrls: ['./tracking-exercise.component.css']
})
export class TrackingExerciseComponent implements OnInit {

  exerciseData:any
  optionsExerciseName:string ='';
  optionsExerciseValue:number| null =0
  showInfo:boolean = false
  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getData().subscribe(data =>{
      this.exerciseData = data
      console.log(this.exerciseData)
    })
  }
  toggleInfo(){
    
    this.showInfo = true;
    this.optionsExerciseValue = this.exerciseData.find((data: any) => data.name === this.optionsExerciseName).value
  }
  onClickUpdate(){
    const newObj = {id:this.exerciseData.find((data: any) => data.name === this.optionsExerciseName).id, name: this.optionsExerciseName, value: Number(this.optionsExerciseValue)}
    this.dataservice.updateData(this.exerciseData.find((data: any) => data.name === this.optionsExerciseName).id, newObj).subscribe()
    
  }

}
