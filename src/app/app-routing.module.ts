import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {MainPageComponent} from './main-page/main-page.component'
import { RegistrationComponent} from './registration/registration.component'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MainPageComponent},
  { path: 'Registration', component: RegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
