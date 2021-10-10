import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaxCodeI } from 'src/app/shared/models/TaxCode.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpB2bService {

  private baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }


  public getTaxCodes(): Observable<TaxCodeI[]> {
    return this.httpClient.get<TaxCodeI[]>(`${this.baseUrl}e-invoice/tax-codes`);
  }

  public create(body): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}e-invoice/b2B`, body, {
      observe: "response"
    });
  }

  public getBuyerTypes() {
    return this.httpClient.get(`${this.baseUrl}lookups/buyer-id-types`)
  }

  public getPaymentMethods() {
    return this.httpClient.get(`${this.baseUrl}lookups/payment-methods`)
  }
}
