import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardHelperComponent } from './components/dashboard-helper/dashboard-helper.component';
import { DashboardNeedyComponent } from './components/dashboard-needy/dashboard-needy.component';
import { MapComponent } from './components/map/map.component';
import { LoginComponent } from './components/login/login.component';
import { RegisteruserComponent } from './components/registeruser/registeruser.component';


const appRoutes: Routes = [
  {
    path: 'helper/dashboard',
    component: DashboardHelperComponent
  },
  {
    path: 'needy/dashboard',
    component: DashboardNeedyComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisteruserComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
