import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { HttpHeaders, HttpResponse, HttpClient } from '@angular/common/http';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.scss']
})
export class GetEmployeeComponent implements OnInit {

  employee: Employee[] = [];
  itemsPerPage: number | undefined;
  page: any;  
  predicate: any;
  reverse: any;

  constructor(protected empoyeeService: EmployeeService ) {
    this.itemsPerPage = 20;
    this.page = 0;
    this.predicate = 'id';
    this.reverse = true;
   }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.loadAll();
  
  }

  sort() {
    const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  loadAll() {
    this.empoyeeService.get(
      {page: this.page,
        size: this.itemsPerPage,
        sort: this.sort()}
    )
      .subscribe((res: HttpResponse<Employee[]>) => this.paginateEmployees(res.body, res.headers),
      res => this.error(res));
  }

  error(res: any){
    window.alert(res.error.message);
    history.back();
  }

  reset() {
    this.employee = [];
    this.loadAll();
  }

  clear() {
    this.employee = [];
    this.loadAll();
  }

  trackId(index: number, item: Employee) {
    return item.id;
  }

  protected paginateEmployees(data: any, headers: HttpHeaders) {
    for (let i = 0; i < data.data.length; i++) {
      this.employee.push(data.data[i]);
    }
  }
}
