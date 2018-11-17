import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardHelperComponent } from './components/dashboard-helper/dashboard-helper.component';
import { DashboardNeedyComponent } from './components/dashboard-needy/dashboard-needy.component';
import { MapComponent } from './components/map/map.component';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
