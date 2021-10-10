import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StudentTableI } from 'src/app/shared/models/students.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpTesterService {
  baseUrl = environment.baseUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getTesterApi(query, pagination): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", query.page || 1);
    httpParams = httpParams.set("pagination", pagination);
    return this.httpClient.get<StudentTableI[]>(`${this.baseUrl}students`, {
      observe: "response",
      params: httpParams
    })
  }

  takeActionApi(testerId) {
    const body = {
      "status": "active"
    }
    return this.httpClient.put(`${this.baseUrl}users/${testerId}`, body, {
      observe: "response"
    });
  }



  buildQuery(httpParams, query) {
    httpParams = httpParams.set("pageSize", '10');
    for (const key in query) {
      if (query[key]) {
        let queryElement = query[key] == "number" ? query[key].toString() : query[key];
        httpParams = httpParams.set(key, queryElement);
      }
    }
    return httpParams;
  }

}
