import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BookingFormComponent } from './booking-form/booking-form.component';

const routes: Routes = [

	// { path: 'first-component', component: FirstComponent },
	{ path: '', component: HomePageComponent },
	{ path: 'book-now', component: BookingFormComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
