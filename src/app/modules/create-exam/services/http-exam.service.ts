import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpExamService {
  baseUrl = environment.baseUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  createExamApi(body) {
    const headers = new HttpHeaders();
    headers.append("Content-Type", "multipart/form-data");
    return this.httpClient.post(`${this.baseUrl}exams`, body, {
      observe: "response",
      headers: headers
    })
  }

  getExamApi(query, pagination): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", query.page || 1);
    httpParams = httpParams.set("pagination", pagination);
    return this.httpClient.get<any[]>(`${this.baseUrl}exams`, {
      observe: "response",
      params: httpParams
    })
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

  applyExamApi(body, examId) {
    return this.httpClient.post(`${this.baseUrl}exams/${examId}/applicants`, body, {
      observe: "response"
    })
  }


}
