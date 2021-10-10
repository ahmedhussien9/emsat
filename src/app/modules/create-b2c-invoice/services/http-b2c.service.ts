import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpB2cService {
  private baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  public create(body): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}e-invoice/b2C`, body, {
      observe: "response"
    });
  }
  
  public getPaymentMethods() {
    return this.httpClient.get(`${this.baseUrl}lookups/payment-methods`)
  }

}
