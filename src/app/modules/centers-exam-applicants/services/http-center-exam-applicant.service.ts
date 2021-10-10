import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpCenterExamApplicantService {

  baseUrl = environment.baseUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getCenterExams(query, pagination): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", query.page || 1);
    httpParams = httpParams.set("pagination", pagination);
    return this.httpClient.get<any[]>(`${this.baseUrl}centers/${JSON.parse(localStorage.getItem("userData")).center}/exams`, {
      observe: "response",
      params: httpParams
    })
  }

  getExamApplicants(query, pagination, id): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", query.page || 1);
    httpParams = httpParams.set("pagination", pagination);
    return this.httpClient.get<any[]>(`${this.baseUrl}exams/${id}/applicants`, {
      observe: "response",
      params: httpParams
    })
  }

  takeActionApi(testerId) {
    const body = {
      "status": "active"
    }
    return this.httpClient.put(`${this.baseUrl}centers/${testerId}/updateStatus`, body, {
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
