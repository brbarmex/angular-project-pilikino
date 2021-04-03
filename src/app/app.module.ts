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
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ChartsModule } from "ng2-charts";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from "./components/shared/header/header.component";
import { NavComponent } from "./components/shared/nav/nav.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { DashChartPierComponent } from "./components/dashboard/dash-chart-pier/dash-chart-pier.component";
import { DashChartBarComponent } from "./components/dashboard/dash-chart-bar/dash-chart-bar.component";
import { DespesasTableComponent } from "./components/despesas/despesas-table/despesas-table.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { IncluirDespesaComponent } from "./components/despesas/incluir-despesa/incluir-despesa.component";
import { AdicionarSaldoComponent } from './components/adicionar-saldo/adicionar-saldo.component';
import { DashMainComponent } from './components/dashboard/dash-main/dash-main.component';
import { DashCardTotalSumaryComponent } from './components/dashboard/dash-card-total-sumary/dash-card-total-sumary.component';
import { DashCardMonthSumaryComponent } from './components/dashboard/dash-card-month-sumary/dash-card-month-sumary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    DashChartPierComponent,
    DashChartBarComponent,
    DespesasTableComponent,
    FooterComponent,
    IncluirDespesaComponent,
    AdicionarSaldoComponent,
    DashMainComponent,
    DashCardTotalSumaryComponent,
    DashCardMonthSumaryComponent,
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
    ChartsModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
