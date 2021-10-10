import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CenterI } from 'src/app/shared/models/center.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpStudentExamHistoryService {

  baseUrl = environment.baseUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getStudentExamHistoryApi(query, pagination): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", query.page || 1);
    httpParams = httpParams.set("pagination", pagination);
    return this.httpClient.get<CenterI[]>(`${this.baseUrl}students/${JSON.parse(localStorage.getItem("userData"))._id}/applies`, {
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

}
