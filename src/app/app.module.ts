import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from "./components/shared/header/header.component";
import { NavComponent } from "./components/shared/nav/nav.component";
import { MainComponent } from "./components/shared/main/main.component";
import { CalendarComponent } from "./components/calendar/calendar.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ChartsModule } from 'ng2-charts';
import { ChartPierComponent } from './components/chart-pier/chart-pier.component';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { DashboardCardOutInComponent } from './components/dashboard-card-out-in/dashboard-card-out-in.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    MainComponent,
    CalendarComponent,
    DashboardComponent,
    ChartPierComponent,
    ChartBarComponent,
    DashboardCardOutInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}