import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { DepartmentComponent } from './pages/department/department.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    // canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'employee',
        component: EmployeeComponent,
      },
      {
        path: 'department',
        component: DepartmentComponent,
      },
      {
        path: 'tickets',
        component: TicketsComponent,
      },
      {
        path: 'new-ticket',
        component: NewTicketComponent,
      },
      {
        path: 'reactive-forms',
        component: ReactiveFormsComponent,
      },
    ],
  },
];
