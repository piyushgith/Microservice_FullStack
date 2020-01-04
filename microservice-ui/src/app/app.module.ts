import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';//depricated
import { HttpClientModule } from '@angular/common/http';
//import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { CallDetailsComponent } from './call-details/call-details.component';
import { ViewPlanComponent } from './view-plan/view-plan.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

import { RestService } from './rest.service';
import { ViewPlanService } from './view-plan/view-plan.service';
import { ProfileService } from './profile/profile.service';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { HomeService } from './home/home.service';
import { AddFriendService } from './add-friend/add-friend.service';
import { InformationService } from './information.service';
import { CallDetailsService } from './call-details/call-details.service';
import { AuthGuardService } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddFriendComponent,
    CallDetailsComponent,
    ViewPlanComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, ReactiveFormsModule, AppRoutingModule,FormsModule
  ],
  providers: [
    RestService,
    LoginService,
    RegisterService,
    HomeService,
    ProfileService,
    ViewPlanService,
    AddFriendService,
    InformationService,
    CallDetailsService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
