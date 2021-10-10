import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { FormArray } from "@angular/forms";
import { InvoiceSummaryI } from "../models/InvoiceSummaryI.model";



export class InvoiceSummaryClass implements InvoiceSummaryI {
    public totalItemsDiscounts: number = 0;
    public totalVatNumber: number = 0;
    public totalInvoiceDiscounts: number = 0;
    public totalAmount: number = 0;
    public taxableAmount: number = 0;
    constructor(
        public formArray: FormArray
    ) { }


    setTotalItemsDiscounts(totalItemsDiscounts) {
        this.totalItemsDiscounts += totalItemsDiscounts;
    }

    setTotalVatNumber(totalVatNumber) {
        this.totalVatNumber += totalVatNumber;
    }

    setTotalInvoiceDiscounts(totalInvoiceDiscounts) {
        this.totalInvoiceDiscounts += totalInvoiceDiscounts;
    }

    setTotalAmount(totalAmount) {
        this.totalAmount += totalAmount;
    }

    setTaxableAmount(taxableAmount) {
        this.taxableAmount += taxableAmount;
    }

    calculate() {
        for (let index = 0; index < this.formArray.controls.length; index++) {
            const element = this.formArray.controls[index];

            // this.setTotalItemsDiscounts(parseInt(element.value.totalInvoiceDiscounts));
            // this.setTotalVatNumber(parseInt(element.value.totalInvoiceDiscounts));
            // this.setTotalInvoiceDiscounts(parseInt(element.value.ItemDiscountAmount));

            if (element.value.totalInvoiceDiscounts > 0) {
                this.totalInvoiceDiscounts += parseInt(element.value.totalInvoiceDiscounts);
            }
            if (element.value.ItemDiscountAmount) {
                this.totalItemsDiscounts += parseInt(element.value.ItemDiscountAmount);
            }

            if (element.value.vatAmount) {
                this.totalVatNumber += parseInt(element.value.vatAmount);
            }

            if (element.value.subTotalInclusiveVat) {
                this.totalAmount += parseInt(element.value.subTotalInclusiveVat);
            }
            if (element.value.subTotalExclusiveVat) {
                this.taxableAmount += parseInt(element.value.subTotalExclusiveVat);
            }
        }
        return;
    }


}




// import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
// import { FormArray } from "@angular/forms";
// import { InvoiceSummaryI } from "../models/InvoiceSummaryI.model";



// export class InvoiceSummaryClass implements InvoiceSummaryI {
//     public totalItemsDiscounts: number = 0;
//     public totalVatNumber: number = 0;
//     public totalInvoiceDiscounts: number = 0;
//     public totalAmount: number = 0;
//     public taxableAmount: number = 0;
//     constructor(
//         public formArray: FormArray
//     ) { }


//     setTotalItemsDiscounts(totalItemsDiscounts) {
//         this.totalItemsDiscounts += totalItemsDiscounts;
//     }

//     setTotalVatNumber(totalVatNumber) {
//         this.totalVatNumber += totalVatNumber;
//     }

//     setTotalInvoiceDiscounts(totalInvoiceDiscounts) {
//         this.totalInvoiceDiscounts += totalInvoiceDiscounts;
//     }

//     setTotalAmount(totalAmount) {
//         this.totalAmount += totalAmount;
//     }

//     setTaxableAmount(taxableAmount) {
//         this.taxableAmount += taxableAmount;
//     }

//     calculate() {
//         for (let index = 0; index < this.formArray.controls.length; index++) {
//             const element = this.formArray.controls[index];
//             this.setTotalItemsDiscounts(parseInt(element.value.totalInvoiceDiscounts) || 0);
//             this.setTotalVatNumber(parseInt(element.value.totalVatNumber) || 0);
//             this.setTotalInvoiceDiscounts(parseInt(element.value.ItemDiscountAmount) || 0);
//             this.setTotalAmount(parseInt(element.value.totalAmount) || 0)
//             this.setTaxableAmount(parseInt(element.value.subTotalExclusiveVat) || 0);
//         }
//         return;
//     }

// }