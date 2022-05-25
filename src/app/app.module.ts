import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { TrackingComponent } from './tracking/tracking.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { GoalsComponent } from './goals/goals.component';
import { WeightLossChartComponent } from './weight-loss-chart/weight-loss-chart.component';
import { TrackingWeightComponent } from './tracking-weight/tracking-weight.component';
import { TrackingExerciseComponent } from './tracking-exercise/tracking-exercise.component';
import { MealsComponent } from './meals/meals.component'


import { routing } from './app-routing.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component'



import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { TrackingBmiComponent } from './tracking-bmi/tracking-bmi.component';
import {MatIconModule} from '@angular/material/icon'




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    TrackingComponent,
    ContactComponent,
    routing,
    BarChartComponent,
    GoalsComponent,
    WeightLossChartComponent,
    TrackingWeightComponent,
    TrackingExerciseComponent,
    MealsComponent,
    PopupComponent,
    TrackingBmiComponent,
  
   
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
