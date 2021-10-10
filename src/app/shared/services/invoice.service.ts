import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TaxCodeI } from '../models/TaxCode.interface';

export interface Item {
  id: number;
  itemId: string;
  name: string;
  description: string;
  unitPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private baseUrl = environment.baseUrl;

  constructor(
    private httpClient: HttpClient
  ) { }


  downloadSingleInvoiceApi(id) {
    let httpParams = new HttpParams();
    let headers = new HttpHeaders();
    httpParams = httpParams.set("id", id);
    return this.httpClient.get(`${this.baseUrl}downloadinvoice`, {
      params: httpParams,
      headers: headers, 
      responseType: 'blob' as 'json'
    })
  }

  showPdfApi(id) {
    let httpParams = new HttpParams();
    let headers = new HttpHeaders();
    httpParams = httpParams.set("id", id);
    return this.httpClient.get(`${this.baseUrl}downloadinvoice`, {
      params: httpParams,
      headers: headers, 
      responseType:'arraybuffer'
    })
  }

  getInvoicesApi(query) {
    let httpParams = new HttpParams();
    let params = this.buildQuery(httpParams, query)
    return this.httpClient.get(`${this.baseUrl}app/e-invoice/invoices`, {
      observe: "response",
      params: params
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

  public getTaxCodes(): Observable<TaxCodeI[]> {
    return this.httpClient.get<TaxCodeI[]>(`${this.baseUrl}app/e-invoice/tax-codes`);
  }

  public createB2b(body): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}app/e-invoice/b2B`, body, {
      observe: "response"
    });
  }

  public getBuyerTypes() {
    return this.httpClient.get(`${this.baseUrl}app/lookups/buyer-id-types`)
  }

  public getPaymentMethods() {
    return this.httpClient.get(`${this.baseUrl}app/lookups/payment-methods`)
  }

  public createB2c(body): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}app/e-invoice/b2C`, body, {
      observe: "response"
    });
  }
}
