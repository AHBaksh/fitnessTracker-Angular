import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient)  { }

  getData(){
    return this.httpClient.get('http://localhost:3000/data')
    
  }
  getGoals(){
    return this.httpClient.get('http://localhost:3000/goals')
  }
  getWeight(){
    return this.httpClient.get('http://localhost:3000/weight')
  }
  getWeightHistory(){
    return this.httpClient.get('http://localhost:3000/weighthistory')
  }
  getMealsData(){
    return this.httpClient.get('http://localhost:3000/healthyMeals')
  }


  createData(createResource: any){
    return this.httpClient.post('http://localhost:3000/data', createResource)
  }
  createWeightHistory(createWResource:{}){
    return this.httpClient.post('http://localhost:3000/weighthistory/1', createWResource)
  }

  updateGoals(goalsId:number, updateBody:{}){
    return this.httpClient.put('http://localhost:3000/goals/' + goalsId, updateBody)
  }
  updateweight(weightId:number, updateBody:{}){
    return this.httpClient.put('http://localhost:3000/weight/' + weightId, updateBody)
  }
  updateWeightHistory(updateBody:{}){
    return this.httpClient.put('http://localhost:3000/weighthistory/1', updateBody)
  }

  updateData(dataId:number, updateBody:{}){
    return this.httpClient.put('http://localhost:3000/data/' + dataId, updateBody)

  }

  dd:Date = new Date
  mm:Date = new Date
  yyyy:Date = new Date
  dateDate:string = '' 
  getDateData(){
    
    return this.dateDate = this.dd.getDate() + '/' + (this.mm.getMonth()+1) + '/' +  this.yyyy.getFullYear();

  }

}
