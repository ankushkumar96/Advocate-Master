import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  columns: string[] = ['caseNo', 'client', 'company', 'amount', 'filedDate', 'status', 'action'];
  cases = [
    { caseNo: 'CASE-001', client: 'John Smith', company: 'ABC Corp', amount: 25000, filedDate: '2025-04-28', status: 'Active' },
    { caseNo: 'CASE-002', client: 'Mary Johnson', company: 'XYZ Industries', amount: 15000, filedDate: '2025-05-01', status: 'Notice Sent' },
    { caseNo: 'CASE-003', client: 'Robert Williams', company: '123 Enterprises', amount: 35000, filedDate: '2025-04-15', status: 'Hearing' },
    { caseNo: 'CASE-004', client: 'Sarah Davis', company: 'Global Solutions', amount: 18000, filedDate: '2025-05-05', status: 'Active' },
    { caseNo: 'CASE-005', client: 'James Brown', company: 'Tech Systems', amount: 42000, filedDate: '2025-04-10', status: 'Resolved' }
  ];
}