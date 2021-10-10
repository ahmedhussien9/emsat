import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';
import { MasjedQueryI } from 'src/app/shared/classes/masjed-query.class';
import { Employees } from 'src/app/shared/models/IEmployee.model';
import { EmployeeByEducationCategory } from 'src/app/shared/models/Ireports.model';
import { MasjedFilterationI } from 'src/app/shared/models/masjed-filteration.model';
import { environment } from 'src/environments/environment';
import { EMPLOYEES_API, MASJED_API } from '../../enum/masjed-api.enum.';

@Injectable({
  providedIn: 'root'
})
export class HttpEmployeeAcQualificationService {

  private readonly baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllEmployeeApi(pageNumber: number, query: MasjedQueryI): Observable<Employees> {
    return this.httpClient.get<Employees>(`${this.baseUrl}${EMPLOYEES_API.employees}`, {
      params: this.createHttpParams(pageNumber, query)
    }).pipe(tap(data => console.log(data)));
  }

  getEmployeeAcademicQualificationApi(): Observable<EmployeeByEducationCategory[]> {
    return this.httpClient.get<EmployeeByEducationCategory[]>(`${this.baseUrl}${EMPLOYEES_API.EmployeeByEducationCategory}`)
  }

  getMasjedFilterationApi(): Observable<MasjedFilterationI> {
    return this.httpClient.get<MasjedFilterationI>(`${this.baseUrl}${MASJED_API.Masjed_Filteration}`)
  }

  createHttpParams(pageNumber, query) {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("pageNumber", pageNumber.toString());
    httpParams = httpParams.set("pageSize", "10");
    if (query) {
      Object.keys(query).forEach(key => query[key] === undefined && delete query[key]);
      for (const key in query) {
        if (Object.prototype.hasOwnProperty.call(query, key)) {
          const element = query[key];
          httpParams = httpParams.set(key, String(element));
        }
      }
    }
    return httpParams;
  }

}
