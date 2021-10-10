import { DatePipe } from '@angular/common';
import { Component, OnInit, Optional } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { HttpCriteriaService } from 'src/app/core/services/http-criteria.service';
import { CenterI } from 'src/app/shared/models/center.model';
import { CriteriaI } from 'src/app/shared/models/criteria.model';
import { UploadImageClass } from 'src/app/shared/_helper/uploadImagesModule';
import { HttpCenterService } from '../centers/services/http-center.service';
import { HttpTesterService } from '../students/service/http-tester.service';
import { HttpExamService } from './services/http-exam.service';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.scss'],
  providers: []
})
export class CreateExamComponent implements OnInit {
  formGroup: FormGroup;
  loading = false;
  dropDownOptions = [
    { id: 1, description: 'Adding new item' },
    { id: 34, description: 'Adding new item' }];
  imagePreview: string | ArrayBuffer = './assets/images/picture.png';
  uploadImageClass: UploadImageClass;
  timeOutImage: any;
  config = {
    displayKey: "name", //if objects array passed which key to be displayed defaults to description
    search: true,
    height: '200px', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
    placeholder: 'Select', // text to be displayed when no item is selected defaults to Select,
    customComparator: () => { }, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
    limitTo: 0, // number thats limits the no of options displayed in the UI (if zero, options will not be limited)
    moreText: 'more', // text to be displayed whenmore than one items are selected like Option 1 + 5 more
    noResultsFound: 'No results found!', // text to be displayed when no items are found while searching
    searchPlaceholder: 'Search', // label thats displayed in search input,
    searchOnKey: 'name', // key on which search should be performed this will be selective search. if undefined this will be extensive search on all keys
  };
  isSubmitted = false;


  criterias: CriteriaI[];
  subCriteria: CriteriaI[];
  testCenters: CenterI[];

  selectedCenters: string[];
  selectedSubCri: string[];

  constructor(
    private fb: FormBuilder,
    @Optional() public dialogRef: MatDialog,
    private toastr: ToastrService,
    public datepipe: DatePipe,
    private httpCriteriaService: HttpCriteriaService,
    private httpTestCenters: HttpCenterService,
    private httpExamService: HttpExamService
  ) {
    this.uploadImageClass = new UploadImageClass(toastr)
    this.formGroup = this.fb.group(({
      image: [null, Validators.required],
      name: [null, Validators.required],
      description: [null, Validators.required],
      centers: [null, Validators.required],
      sub_criterias: [null, Validators.required],
      criteria: [null, Validators.required],
      durations: this.fb.array([this.createDurationForm()])
    }));
  }


  getCriteria() {
    this.httpCriteriaService.getCriteriaApi({}, "false").subscribe(data => {
      this.criterias = data.body;
    })
  }

  selectedSubCr(event) {
    this.formGroup.get("sub_criterias").setValue(event.value.map(subC => subC._id));
  }

  selectedCentersHandler(event) {
    this.formGroup.get("centers").setValue(event.value.map(center => center._id));
  }

  getTestCenters() {
    this.httpTestCenters.getCentersApi({}, "false").subscribe(data => {
      this.testCenters = data.body;
    })
  }

  selectedCriteria(event) {
    this.getSubCriteria(event.target.value);
  }

  getSubCriteria(crId) {
    this.httpCriteriaService.getSubCriteriaApi({}, "false", crId).subscribe(data => {
      this.subCriteria = data.body;
    })
  }
  addEvent(indx, $event) {
    const date = new Date($event.value);
    this.getDurationFormArray().at(indx).get("date").setValue(this.datepipe.transform(date, 'yyyy-MM-dd'))
  }

  // get the duration form array;
  getDurationFormArray() {
    return this.formGroup.get("durations") as FormArray;
  }
  // get duration form array controls
  getDurationControls() {
    return (this.formGroup.get('durations') as FormArray).controls;
  }

  // Remove single duration
  removeDuration(indx: number) {
    return this.getDurationFormArray().removeAt(indx);
  };

  // Create a single duration form
  createDurationForm() {
    return this.fb.group({
      date: [null, Validators.required],
      times: this.fb.array([this.createTimeDuration()])
    })
  }

  // Add New times for specific duration
  addTimes(indx) {
    const control = ((<FormArray>this.formGroup.controls['durations']).at(indx).get('times') as FormArray);
    control.push(this.createTimeDuration());
  }

  // Add New duration
  addNewDuration() {
    const add = this.formGroup.get('durations') as FormArray;
    add.push(this.createDurationForm())
  }

  // createtimes from & to for a single duration
  createTimeDuration() {
    return this.fb.group({
      from: [null, Validators.required],
      to: [null, Validators.required]
    })
  }


  submit() {
    this.loading = true;
    if (this.formGroup.invalid) {
      this.toastr.error("Please make sure to enter all the required data");
      this.loading = false;
      return;
    }

    const image = this.formGroup.get("image").value;
    delete this.formGroup.value.image;
    const data = this.formGroup.value;
    const formData = new FormData();
    formData.append("image", image);
    formData.append("data", JSON.stringify(data));

    this.httpExamService.createExamApi(formData).subscribe(data => {
      this.toastr.show(`Exam ${data.body['name'] || ''} has been added successfully!`);
      this.loading = false;
      this.formGroup.reset();
      this.selectedCenters = [];
      this.selectedSubCri = [];
    })

    console.log(this.formGroup.value)
  }

  onImagePicked(event) {
    this.uploadImageClass.uploadSingle(event,); // Send the event to the upload function that will handle the operation for uploading image
    this.formGroup.get('image').patchValue(this.uploadImageClass.imageFile); // the file object assigned to image file to be send to the server
    this.timeOutImage = setTimeout(() => { this.imagePreview = this.uploadImageClass.imagePreview || this.imagePreview; }, 100);  // this is the image preview that will be displayed in the UI
  }

  ngOnInit(): void {
    this.getCriteria();
    this.getTestCenters()
  }

}
