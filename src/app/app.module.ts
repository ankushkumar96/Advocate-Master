import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { AdvocateMasterComponent } from './advocate-master/advocate-master.component';
import { CompanyMasterComponent } from './company-master/company-master.component';
import { CaseMasterComponent } from './case-master/case-master.component';
import { NoticeManagementComponent } from './notice-management/notice-management.component';
import { AdvocateFeeManagementComponent } from './advocate-fee-management/advocate-fee-management.component';
import { AdvocateListComponent } from './advocate-list/advocate-list.component';
import { CompanyListComponent } from './company-list/company-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AdvocateMasterComponent,
    CompanyMasterComponent,
    CaseMasterComponent,
    NoticeManagementComponent,
    AdvocateFeeManagementComponent,
    AdvocateListComponent,
    CompanyListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
