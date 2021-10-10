import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/operators';
import { InvoiceService } from 'src/app/shared/services/invoice.service';

@Component({
  selector: 'app-invoice-preview',
  templateUrl: './invoice-preview.component.html',
  styleUrls: ['./invoice-preview.component.scss']
})
export class InvoicePreviewComponent implements OnInit {
  pdfUrl: SafeUrl;

  @ViewChild('pdfview') pdfview: ElementRef;

  constructor(
    private invoiceService: InvoiceService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.pipe(
      map(data => data.id),
      switchMap(data => this.invoiceService.showPdfApi(data))
    ).subscribe(data => {
      this.showData(data);
    })
  }

  showData(data) {
    this.pdfUrl = this.dowloadPdf(data) +
      '#toolbar=0&navpanes=0&scrollbar=0&view=FitH';
    this.pdfview.nativeElement.setAttribute('data', this.pdfUrl);
  }


  dowloadPdf(resp) {
    const file = new Blob([resp], { type: 'application/pdf' });
    const fileURL = window.URL.createObjectURL(file);
    return fileURL;
  }

}
