import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './get-employee/employee.model';
import { map } from 'rxjs/operators';
import { createRequestOption } from '../request-util';
type EntityResponseType = HttpResponse<Employee>;
type EntityArrayResponseType = HttpResponse<Employee[]>;

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public resourceUrl = 'http://dummy.restapiexample.com/api/v1/employees';

  constructor(protected http: HttpClient) { }

  get(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<Employee[]>(this.resourceUrl, {params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertFromServer(res)));
  }

  protected convertFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
    }
    return res;
  }

}
