import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CenterI } from 'src/app/shared/models/center.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpRecommenededExamsService {
  baseUrl = environment.baseUrl;
  constructor(
    private httpClient: HttpClient
  ) { }

  getRecommendedExamsApi(): Observable<any> {
    let httpParams = new HttpParams();
    let cr = JSON.parse(localStorage.getItem("userData")).sub_criterias;
    httpParams = httpParams.append("sub_criterias", cr);
    console.log(cr);
    return this.httpClient.get<CenterI[]>(`${this.baseUrl}exams`, {
      observe: "response",
      params: httpParams
    })
  }
}
