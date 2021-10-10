import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IReports, StatisticsByCapacity, StatisticsByType } from 'src/app/shared/models/Ireports.model';
import { environment } from 'src/environments/environment';
import { MASJED_API } from '../../enum/masjed-api.enum.';
import { MasjedFilterationI } from 'src/app/shared/models/masjed-filteration.model';
import { MasjedQueryI } from 'src/app/shared/classes/masjed-query.class';
import { IMasjedModel } from 'src/app/shared/models/masjed.model';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/internal/operators/tap';

export interface MasjedOptionI {
  job: number,
  type: number,
  branch: number
}

@Injectable({
  providedIn: 'root'
})
export class HttpMsManagementReportsService {
  private readonly baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }


  getAllMasjedApi(query: MasjedQueryI): Observable<IReports> {
    return this.httpClient.get<IReports>(`${this.baseUrl}${MASJED_API.MasjedAll}`, {
      params: this.createHttpParams(query)
    }).pipe(tap(data => console.log(data)));
  }

  getMasjedFilterationApi(): Observable<MasjedFilterationI> {
    return this.httpClient.get<MasjedFilterationI>(`${this.baseUrl}${MASJED_API.Masjed_Filteration}`)
  }

  createHttpParams(query) {
    let httpParams = new HttpParams();
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

  getMasjedsCapacityApi(pageNumber: number, query: MasjedQueryI): Observable<IMasjedModel> {
    return this.httpClient.get<IMasjedModel>(`${this.baseUrl}${MASJED_API.masjeds}`, {
      params: this.createHttpParamsTable(pageNumber, query)
    }).pipe(tap(data => console.log(data)));
  }

  msStatisticsByTypeApi() {
    return this.httpClient.get<StatisticsByType>(`${this.baseUrl}${MASJED_API.StatisticsByType}`)
  }

  msStatisticsByCapacityApi() {
    return this.httpClient.get<StatisticsByCapacity>(`${this.baseUrl}${MASJED_API.StatisticsByCapacity}`)
  }


  createHttpParamsTable(pageNumber, query) {
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
