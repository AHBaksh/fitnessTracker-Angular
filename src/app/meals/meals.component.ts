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
      this.dataservice.shareMealsData(this.mealsData, this.mealsData.length)
      console.log(this.dataservice.mData)
       this.imgUrl= this.dataservice.mData.imgUrl
       this.mealItem = this.dataservice.mData.name
       this.mealDescription =this.dataservice.mData.description
    })
  }
  openDialog(){
    this.dialog.open(PopupComponent, {
      height: '75%',
      width: '70%',
    })
  }  


}
