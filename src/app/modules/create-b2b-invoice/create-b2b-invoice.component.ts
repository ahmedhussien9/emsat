import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs/internal/Observable';
import { InvoiceSummaryClass } from 'src/app/shared/classes/invoice-summary.class';
import { Item } from 'src/app/shared/classes/item.class';
import { PAYMENT_METHODS } from 'src/app/shared/classes/payment-method-types.class';
import { BUYERS } from 'src/app/shared/constants/buyer';
import { InvoiceSummaryI } from 'src/app/shared/models/InvoiceSummaryI.model';
import { VATtypeI } from 'src/app/shared/models/VAT_type';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { UploadFileService } from 'src/app/shared/services/upload-file.service';
const TAX: number = 0.15;
import { FileType } from 'src/app/shared/services/upload-file.service';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-create-b2b-invoice',
  templateUrl: './create-b2b-invoice.component.html',
  styleUrls: ['./create-b2b-invoice.component.scss']
})
export class CreateB2bInvoiceComponent implements OnInit {
  buyers: any[] = BUYERS;
  invoiceSummary: InvoiceSummaryI = {
    formArray: null,
    totalAmount: 0,
    totalInvoiceDiscounts: 0,
    totalVatNumber: 0,
    totalItemsDiscounts: 0
  };
  formGroup: FormGroup;
  paymentMethods = PAYMENT_METHODS;
  firstSampleFiles: File[] = [];
  secondSampleFiles: File[] = [];
  thirdSampleFiles: File[] = [];
  isSubmitted = false;
  vat_type$: Observable<VATtypeI[]>;
  buyerType$: Observable<any>;
  paymentMethod$: Observable<any>;
  loading = false;
  constructor(
    private readonly toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private uploadFileService: UploadFileService,
    private invoiceService: InvoiceService,
  ) {
    this.formGroup = this.fb.group({
      irn: [null, Validators.required], // done
      paymentMethod: [null, Validators.required], // done
      taxableAmount: [null, Validators.required],
      vatTotal: [null, Validators.required],
      total: [null, Validators.required],
      notes: [null, Validators.required],
      // attachementsUrl: this.fb.array([this.createAttachementFormGroup()]),
      buyer: this.fb.group({
        name: ['', Validators.required], // done
        streetName: [null, Validators.required], // done
        city: [null, Validators.required], // done
        buildingNum: [null, Validators.required], // done
        postalCode: [null, Validators.required], // done
        neighborhood: [null, Validators.required], // done
        additionalStreetName: [null, Validators.required], // done
        district: [null, Validators.required], // done
        state: [null, Validators.required], // done
        phone: [null, Validators.required], // done
        vatRegisterationNum: [null, Validators.required], // done
        buyerIdType: [null, Validators.required], // done
        buyerIdNum: [null, Validators.required] // done
      }),
      items: this.fb.array([this.productForm()])
    });

    this.vat_type$ = this.invoiceService.getTaxCodes();
    this.buyerType$ = this.invoiceService.getBuyerTypes();
    this.paymentMethod$ = this.invoiceService.getPaymentMethods();
  }

  ngOnInit(): void { }

  addNewUrlAttachements() {
    const add = this.formGroup.get('attachementsUrl') as FormArray;
    add.push(this.createAttachementFormGroup())
  }

  createAttachementFormGroup() {
    return this.fb.group({
      url: [],
      name: []
    })
  }


  selectPaymentMethod(event) {
    const paymentMethod = event.target.value;
    this.formGroup.get("paymentMethod").setValue(parseInt(paymentMethod));
  }

  addNewProduct() {
    const add = this.formGroup.get('items') as FormArray;
    add.push(this.productForm())
  }

  getItemsControls() {
    return (this.formGroup.get('items') as FormArray).controls;
  }

  getAttachement() {
    return (this.formGroup.get('attachementsUrl') as FormArray).controls;
  }

  get buyer() {
    return this.formGroup.get("buyer") as FormGroup;
  }

  productForm() {
    return this.fb.group({
      name: [null, Validators.required], // done
      description: [null, Validators.required], // done
      serviceCode: [null, Validators.required], // done
      quantity: [1, Validators.required], // done
      unitPrice: [null, Validators.required], // done
      vatAmount: [null, Validators.required], // done
      vatPercentage: [0, Validators.required], // done
      taxCodeId: [null, Validators.required],//done
      subTotalExclusiveVat: [null, Validators.required], // done
      subTotalInclusiveVat: [null, Validators.required], // done
      ItemDiscountAmount: [0, Validators.required]// done
    });
  }


  selectVatTypeChange(index: number) {
    const item = this.getItemsFormArray().at(index);
    const taxCodeId = item.get("taxCodeId").value;
    this.setVatPercetange(item, taxCodeId);
    this.calculateSingleItem(index);
  }

  setVatPercetange(item, taxCodeId) {
    if (item && taxCodeId)
      this.vat_type$.subscribe(data => {
        let itemVatValue = data.find(vat => vat.id === parseInt(taxCodeId)).percentage;
        item.get("vatPercentage").setValue(itemVatValue);
      })
  }

  getItemsFormArray() {
    return this.formGroup.get("items") as FormArray;
  }

  calculateSingleItem(index: number) {
    const item = this.getItemsFormArray().at(index);
    const itemClass = new Item(this.getItemsFormArray(), index);
    this.setItemSubTotalExclusiveVat(item, itemClass.getItemTotalPriceAfterDiscount());
    this.setSubTotalInclusiveVat(item, parseInt(itemClass.calculateItemPrice()));
    this.setItemTotalVatAmount(item, itemClass.calculateItemVatAmount());
    this.collectInvoiceSummaryInfo();
  }

  setItemSubTotalExclusiveVat(item, itemTotalPriceExclusiveVat: number) {
    item.get("subTotalExclusiveVat").setValue(itemTotalPriceExclusiveVat)
  }

  setSubTotalInclusiveVat(item, itemTotalPrice: number) {
    item.get("subTotalInclusiveVat").setValue(itemTotalPrice);
  }

  setItemTotalVatAmount(item, vatAmount: number) {
    item.get("vatAmount").setValue(vatAmount);
  }

  setInvoiceVatTotal(totalVatNumber: number) {
    this.formGroup.get("vatTotal").setValue(totalVatNumber);
  }

  setInvoiceTaxableAmount(taxableAmount: number) {
    this.formGroup.get("taxableAmount").setValue(taxableAmount);
  }

  setInvoiceTotalPrice(totalAmount: number) {
    this.formGroup.get("total").setValue(totalAmount);
  }

  collectInvoiceSummaryInfo() {
    const invoiceSummary = new InvoiceSummaryClass(this.getItemsFormArray());
    invoiceSummary.calculate();
    this.invoiceSummary = invoiceSummary;
    this.setInvoiceVatTotal(invoiceSummary.totalVatNumber);
    this.setInvoiceTaxableAmount(invoiceSummary.taxableAmount);
    this.setInvoiceTotalPrice(invoiceSummary.totalAmount);
  }

  deleteItem(index: number) {
    this.getItemsFormArray().removeAt(index);
  }

  submitInvoice() {
    this.isSubmitted = true;
    this.loading = true;

    if (this.formGroup.invalid) {
      this.toastr.error("Please fill the required fields");
      this.loading = false;
      return;
    }
    this.invoiceService.createB2b(this.formGroup.value).pipe(
      finalize(() => {
        this.loading = false;
      })
    ).subscribe(data => {
      console.log(data);
      this.toastr.success("Invoice has been generated successy");
      this.formGroup.reset();
      this.isSubmitted = false;
      this.router.navigate(['/dash', 'invoices', data.body.id]);
      this.resetSummary();
    }, err => {
      console.log(err);
      this.toastr.error(err.error.error.message);
    })
  }

  dataURItoBlob(dataURI: any, fileType: any, fileName: any) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([int8Array], { type: fileType });
    const file = new File([blob], fileName, { type: fileType });
    return file;
  }


  droppedFiles(type: string, files: NgxFileDropEntry[]) {
    this.dropped(type, files)
  }

  dropped(type: string, files: NgxFileDropEntry[]) {
    switch (type) {
      case FileType.FIRST_SAMPLE:
        this.uploadFileService.dropped(type, files);
        this.firstSampleFiles = this.uploadFileService.firstSampleFiles;
        break;
      case FileType.SECOND_SAMPLE:
        this.uploadFileService.dropped(type, files);
        this.secondSampleFiles = this.uploadFileService.secondSampleFiles;
        break;
      case FileType.THIRD_SAMPLE:
        this.uploadFileService.dropped(type, files);
        this.thirdSampleFiles = this.uploadFileService.thirdSampleFiles;;
        break;
      default:
        break;
    }
  }

  deleteFile(type: string, index: number) {
    console.log('clicked');
    switch (type) {
      case FileType.FIRST_SAMPLE:
        this.firstSampleFiles.splice(index, 1);
        break;
      case FileType.SECOND_SAMPLE:
        this.secondSampleFiles.splice(index, 1);
        break;
      case FileType.THIRD_SAMPLE:
        this.thirdSampleFiles.splice(index, 1);
        break;
      default:
        break;
    }
  }

  resetSummary() {
    this.invoiceSummary.totalVatNumber = 0;
    this.invoiceSummary.totalAmount = 0;
    this.invoiceSummary.totalInvoiceDiscounts = 0;
    this.invoiceSummary.totalItemsDiscounts = 0;
  }
}
