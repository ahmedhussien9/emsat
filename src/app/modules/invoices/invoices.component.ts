import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { InvoiceService } from 'src/app/shared/services/invoice.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss'],
})
export class InvoicesComponent implements OnInit {
  invoices: any;
  loading: boolean = true;
  page: number = 1;
  totalItems: number;
  formGroup: FormGroup;
  downloadlinkIndex = [];
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  selected: {startDate: Date, endDate: Date};
  constructor(
    private readonly invoiceService: InvoiceService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.initFormFilter();
  }


  initFormFilter() {
    return this.formGroup = this.fb.group({
      page: [1],
      search: [''],
      to: [''],
      from: ['']
    })
  }

  ngOnInit(): void {
    this.getPage(1);
  }

  getPage(page) {
    this.loading = true;
    this.page = page;
    this.formGroup.get("page").setValue(page);
    this.invoiceService.getInvoicesApi(this.formGroup.value).pipe(
      finalize(() => this.loading = false)
    ).subscribe((data: any) => {
      this.invoices = data.body.items;
      this.totalItems = data.body.totalRecords;
      this.loading = false;
    });
  }


  navigateToInvoice(id: any) {
    this.router.navigate(['/dash', 'invoice', id]);
  }

  goToInvoice(id: number, type: string) {
    if (type === 'B') {
      this.router.navigate(['/dash', 'b2b-invoice-return', id]);
    } else {
      this.router.navigate(['/dash', 'b2c-invoice-return', id]);
    }
  }

  downloadInvoice(event, invoiceId, index) {
    console.log(event.srcElement.innerText, invoiceId);
    this.invoiceService.downloadSingleInvoiceApi(invoiceId).subscribe(data => {
      this.dowloadPdf(data, invoiceId);
    })
  }

  dowloadPdf(resp, invoiceId) {
    const file = new Blob([resp], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    const link = document.createElement('a');
    link.href = fileURL;
    link.download = invoiceId + "- " + new Date() + ".pdf";
    link.click();
  }

  downloadAll() { }

}
