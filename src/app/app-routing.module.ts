import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {AdvocateMasterComponent} from './advocate-master/advocate-master.component'
import {CompanyMasterComponent} from './company-master/company-master.component'
import {CaseMasterComponent} from './case-master/case-master.component'
import {NoticeManagementComponent} from './notice-management/notice-management.component'
import {AdvocateFeeManagementComponent} from './advocate-fee-management/advocate-fee-management.component'
import {AdvocateListComponent} from './advocate-list/advocate-list.component'
import {CompanyListComponent} from './company-list/company-list.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'advocateMaster', component: AdvocateMasterComponent },
  { path: 'companyMaster', component: CompanyMasterComponent },
  { path: 'caseMaster', component: CaseMasterComponent },
  { path: 'noticeManagement', component: NoticeManagementComponent },
  { path: 'advocatefeemanagement', component: AdvocateFeeManagementComponent },
  { path: 'advocateList', component: AdvocateListComponent },
  { path: 'companyList', component: CompanyListComponent },
  { path: '**', redirectTo: '' } // fallback route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
