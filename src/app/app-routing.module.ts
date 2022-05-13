import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TrackingComponent } from './tracking/tracking.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'contacts', component:ContactComponent},
  {path: 'tracking', component:TrackingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = [HomeComponent, ContactComponent, TrackingComponent]
