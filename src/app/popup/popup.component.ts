import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(private dataservice:DataService) { }

  mealsData:any;
  mealDescription:string= '';
  mealItem:string ='';
  imgUrl:string ='';
  nutriInfo =[]
  nutriData:any
  newArray:any
  pTime={}
  cTime={}
  serve={}
  cookingMethod=[]
  ingredient=[]

  

  ngOnInit(): void {
    
      this.mealsData =this.dataservice.mData;
       this.imgUrl= this.mealsData.imgUrl
       this.mealItem = this.mealsData.name
       this.mealDescription =this.mealsData.description
       this.nutriInfo= this.mealsData.nutritionInfo
       this.nutriData= this.mealsData.nutritionData
       this.pTime = this.mealsData.prepTime
       this.cTime =this.mealsData.cookTime
       this.serve=this.mealsData.serves
       this.cookingMethod=this.mealsData.method
       this.ingredient=this.mealsData.ingredients
       
       this.newArray= Object.keys(this.nutriData)
   
   
  }
  

}
