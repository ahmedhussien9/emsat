import { trigger, transition, query, animateChild, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { HttpCenterService } from 'src/app/modules/centers/services/http-center.service';
import { HttpExamService } from 'src/app/modules/create-exam/services/http-exam.service';
import { CriteriaI } from 'src/app/shared/models/criteria.model';
import { LanguageService } from 'src/app/shared/services/language.service';
import { FileType, UploadFileService } from 'src/app/shared/services/upload-file.service';
import { UploadFilesClass } from 'src/app/shared/_helper/uploadFilesModule';
import { UploadImageClass } from 'src/app/shared/_helper/uploadImagesModule';
import { HttpCriteriaService } from '../../services/http-criteria.service';
import { HttpAuthService } from '../services/http-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./../login/login.component.scss', './register.component.scss'],
})
export class RegisterComponent implements OnInit {
  step = 1;
  roles = ['customer', 'tax_authorizy'];
  lang = localStorage.getItem("LOCALIZE_DEFAULT_LANGUAGE");
  bgPhoto = `./assets/images/banner.png`;
  separateDialCode = true;
  isLastStep = false;
  isSubmittingForm = false;
  showPassword = false;
  showConfirmPassword = false;
  formGroup: FormGroup;
  formSubmitAttempt = false;
  loading = false;
  firstSampleFiles: File[] = [];
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
  }
  imagePreview: string | ArrayBuffer = './assets/images/user.png';
  uploadImageClass: UploadImageClass;
  timeOutImage: any;
  dropDownOptions = [
    { id: 1, description: 'Adding new item' },
    { id: 34, description: 'Adding new item' }];
  uploadFilesClass: UploadFilesClass;
  FORM_DATA = new FormData();

  criterias: CriteriaI[];
  subCriteria: CriteriaI[];
  selectedCenters: string[];
  selectedSubCri: string[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpAuthService: HttpAuthService,
    private toastr: ToastrService,
    private uploadFileService: UploadFileService,
    private httpCriteriaService: HttpCriteriaService,
    private httpTestCenters: HttpCenterService,
    private httpExamService: HttpExamService
  ) {
    this.uploadImageClass = new UploadImageClass(toastr);
    this.uploadFilesClass = new UploadFilesClass(toastr);
    this.formGroup = this.fb.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      id_number: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      type: ['student'],
      criteria: [null, Validators.required],
      sub_criterias: [null, Validators.required],
    });
  }

  getCriteria() {
    this.httpCriteriaService.getCriteriaApi({}, "false").subscribe(data => {
      this.criterias = data.body;
    })
  }

  selectedSubCr(event) {
    this.formGroup.get("sub_criterias").setValue(event.value.map(subC => subC._id));
  }

  selectedCriteria(event) {
    this.getSubCriteria(event.target.value);
  }

  getSubCriteria(crId) {
    this.httpCriteriaService.getSubCriteriaApi({}, "false", crId).subscribe(data => {
      this.subCriteria = data.body;
    })
  }

  ngOnInit(): void { 
    this.getCriteria();
  }


  nextStep() {
    if (!this.isLastStep && this.isSubmittingForm) {
      this.isLastStep = true;
    }
  }
  submitFirstStep() {
    if (this.formGroup.get("firstForm")?.valid) {
      this.isLastStep = true;
    }
  }

  register() {
    this.loading = true;
    // Create a new Form Data.
    const FORM_DATA = new FormData();
    // Set uploaded Files to Form Data
    this.uploadFileService.setFilesToFormData(FORM_DATA, this.firstSampleFiles);
    // Set user data to form data
    this.uploadFileService.setFormGroup(FORM_DATA, this.formGroup);
    // validate all the required fields
    if (this.formGroup.invalid) {
      this.toastr.error("Please fill the required information");
      this.loading = false;
      return;
    }
    // validate upload file at least one file must be uploaded
    if (this.firstSampleFiles.length === 0) {
      this.toastr.error("Please upload at least one attachement");
      return;
    }
    // send request to the backend
    this.httpAuthService.registerApi(FORM_DATA)
      .pipe(finalize(() => this.loading = false))
      .subscribe(data => {
        this.toastr.success("You have registered successfully");
        this.formGroup.reset();
        this.router.navigate(['/auth', "login"]);
      })
  }

  showPasswordHandler() {
    this.showPassword = !this.showPassword;
  }

  showConfirmPasswordHandler() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }


  onImagePicked(event) {
    this.uploadImageClass.uploadSingle(event,); // Send the event to the upload function that will handle the operation for uploading image
    this.formGroup.get('image').patchValue(this.uploadImageClass.imageFile); // the file object assigned to image file to be send to the server
    this.timeOutImage = setTimeout(() => { this.imagePreview = this.uploadImageClass.imagePreview || this.imagePreview; }, 100);  // this is the image preview that will be displayed in the UI
  }

  droppedFiles(type: string, files: NgxFileDropEntry[]) {
    this.dropped(type, files);
  }

  dropped(type: string, files: NgxFileDropEntry[]) {
    switch (type) {
      case FileType.FIRST_SAMPLE:
        this.uploadFileService.dropped(type, files);
        this.firstSampleFiles = this.uploadFileService.firstSampleFiles;
        break;
      case FileType.SECOND_SAMPLE:
        this.uploadFileService.dropped(type, files);
        // this.secondSampleFiles = this.uploadFileService.secondSampleFiles;
        break;
      case FileType.THIRD_SAMPLE:
        this.uploadFileService.dropped(type, files);
        // this.thirdSampleFiles = this.uploadFileService.thirdSampleFiles;;
        break;
      default:
        break;
    }
  }

}
