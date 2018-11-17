import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardHelperComponent } from './components/dashboard-helper/dashboard-helper.component';
import { DashboardNeedyComponent } from './components/dashboard-needy/dashboard-needy.component';

const appRoutes: Routes = [
  {
    path: 'helper/dashboard',
    component: DashboardHelperComponent
  },
  {
    path: 'needy/dashboard',
    component: DashboardNeedyComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
