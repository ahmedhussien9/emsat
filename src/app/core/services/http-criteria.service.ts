import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CriteriaI } from 'src/app/shared/models/criteria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpCriteriaService {

  baseUrl = environment.baseUrl;
  constructor(
    private httpClient: HttpClient
  ) { }


  getCriteriaApi(query, pagination): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", query.page || 1);
    httpParams = httpParams.set("pagination", pagination);
    return this.httpClient.get<CriteriaI[]>(`${this.baseUrl}criterias`, {
      observe: "response",
      params: httpParams
    })
  }

  addCriteriaApi(name) {
    const body = {
      ...name
    }
    return this.httpClient.post(`${this.baseUrl}criterias`, body, {
      observe: "response"
    });
  }

  editCriteriaApi(name, id) {
    const body = {
      ...name
    }
    return this.httpClient.put(`${this.baseUrl}criterias/${id}`, body, {
      observe: "response"
    });
  }



  editSubCriteriaApi(name, crid, subId) {
    const body = {
      ...name
    }
    return this.httpClient.put(`${this.baseUrl}criterias/${crid}/subCriterias/${subId}`, body, {
      observe: "response"
    });
  }


  addSubCriteriaApi(name, id) {
    const body = {
      ...name
    }
    return this.httpClient.post(`${this.baseUrl}criterias/${id}/subCriterias`, body, {
      observe: "response"
    });
  }


  getSubCriteriaApi(query, pagination, criteriaId): Observable<any> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set("page", query.page || 1);
    httpParams = httpParams.set("pagination", pagination);
    return this.httpClient.get<CriteriaI[]>(`${this.baseUrl}criterias/${criteriaId}/subCriterias`, {
      observe: "response",
      params: httpParams
    })
  }

  takeActionApi(centerId) {
    const body = {
      "status": "active"
    }
    return this.httpClient.put(`${this.baseUrl}users/${centerId}`, body, {
      observe: "response"
    });
  }

  deleteCriteriaApi(crId) {
    return this.httpClient.delete(`${this.baseUrl}criterias/${crId}`, {
      observe: "response"
    })
  }

  deleteSubCriteriaApi(crId, subId) {
    return this.httpClient.delete(`${this.baseUrl}criterias/${crId}/subCriterias/${subId}`, {
      observe: "response"
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
