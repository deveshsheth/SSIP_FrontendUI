import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcriminalComponent } from './criminals/addcriminal/addcriminal.component';
import { CriminaldetailComponent } from './criminals/criminaldetail/criminaldetail.component';
import { CriminalsComponent } from './criminals/criminals.component';
import { EditcriminalComponent } from './criminals/editcriminal/editcriminal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WebcamComponent } from './webcam/webcam.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'criminals',component:CriminalsComponent},
  {path:'addcriminal',component:AddcriminalComponent},
  {path:'criminaldetail',component:CriminaldetailComponent},
  {path:'',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'webcam',component:WebcamComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
