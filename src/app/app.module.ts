
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes}   from '@angular/router';
import{HttpModule}   from '@angular/http';
import{FormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import{UserService}   from './shared-service/user.service';
import { PrincipalComponent } from './components/principal/principal.component';
import { SimpleComponent } from './simple/simple.component';
import { NewserviceService } from './newservice.service';
const appRoutes:Routes=[
  {path:'', component:AppComponent},
    {path:'op', component:UserFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent,
    PrincipalComponent,
    SimpleComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,NewserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }