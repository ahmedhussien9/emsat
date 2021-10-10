import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { Employees } from 'src/app/shared/models/IEmployee.model';
import { environment } from 'src/environments/environment';
import { EMPLOYEES_API } from '../../enum/masjed-api.enum.';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAcQualificationService {

  private readonly baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllEmployeeApi(): Observable<Employees> {
    let httpParams = new HttpParams();
    // httpParams = httpParams.set("job", masjedOptions.job);
    // httpParams = httpParams.set("type", masjedOptions.type);
    // httpParams = httpParams.set("branch", masjedOptions.branch);

    return this.httpClient.get<Employees>(`${this.baseUrl}${EMPLOYEES_API.employees}`, {
      params: httpParams
    }).pipe(tap(data => console.log(data)));
  }
}
