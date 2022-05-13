import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { MatDialog} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  constructor( public dialog:MatDialog,public dataservice:DataService) { }

  mealsData:any;
  mealDescription:string= '';
  mealItem:string ='';
  imgUrl:string ='';

  ngOnInit(): void {
    this.dataservice.getMealsData().subscribe(data =>{
      this.mealsData =data;
       this.imgUrl= this.mealsData[0].imgUrl
       this.mealItem = this.mealsData[0].name
       this.mealDescription =this.mealsData[0].description
    })
  }
  openDialog(){
    this.dialog.open(PopupComponent, {
      height: '400px',
      width: '600px',
    })
  }  


}
