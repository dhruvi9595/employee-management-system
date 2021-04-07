import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeModule } from './employee/employee.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path: 'employee',
      loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    }
  ],
  ),
  EmployeeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }