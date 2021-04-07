import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetEmployeeComponent } from './get-employee/get-employee.component';

const routes: Routes = [
  { path: 'employee', component: GetEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
