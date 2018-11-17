import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardHelperComponent } from './components/dashboard-helper/dashboard-helper.component';
import { DashboardNeedyComponent } from './components/dashboard-needy/dashboard-needy.component';
import { AppRoutingModule } from './app-routing.module';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule} from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    DashboardHelperComponent,
    DashboardNeedyComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMvIYdGx_M_RF4zc2FyirOegr7284xcvc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
