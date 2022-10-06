import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataTablesModule } from 'angular-datatables';
import { CriminalsComponent } from './criminals/criminals.component';
import { AddcriminalComponent } from './criminals/addcriminal/addcriminal.component';
import { EditcriminalComponent } from './criminals/editcriminal/editcriminal.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CriminaldetailComponent } from './criminals/criminaldetail/criminaldetail.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { WebcamModule } from 'ngx-webcam';
import { WebcamComponent } from './webcam/webcam.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CriminalsComponent,
    AddcriminalComponent,
    EditcriminalComponent,
    LoginComponent,
    SignupComponent,
    CriminaldetailComponent,
    UserprofileComponent,
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    WebcamModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
