import { trigger, transition, query, animateChild, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxFileDropEntry } from 'ngx-file-drop';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { LanguageService } from 'src/app/shared/services/language.service';
import { FileType, UploadFileService } from 'src/app/shared/services/upload-file.service';
import { UploadFilesClass } from 'src/app/shared/_helper/uploadFilesModule';
import { UploadImageClass } from 'src/app/shared/_helper/uploadImagesModule';
import { HttpAuthService } from '../services/http-auth.service';

@Component({
  selector: 'app-register-center',
  templateUrl: './register-center.component.html',
  styleUrls: ['./../login/login.component.scss', './register-center.component.scss']
})
export class RegisterCenterComponent implements OnInit {

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
  imagePreview: string | ArrayBuffer = './assets/images/user.png';
  uploadImageClass: UploadImageClass;
  timeOutImage: any;
  uploadFilesClass: UploadFilesClass;
  FORM_DATA = new FormData();
  firstSampleFiles: File[] = [];
  coods: any = {
    latitude: 25.266666,
    longitude: 55.316666
  };
  locationValues = [];
  latitude: number;
  longitude: number;
  zoom: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private httpAuthService: HttpAuthService,
    private toastr: ToastrService,
    private uploadFileService: UploadFileService,
  ) {
    this.uploadImageClass = new UploadImageClass(toastr);
    this.uploadFilesClass = new UploadFilesClass(toastr);

    this.uploadImageClass = new UploadImageClass(toastr);
    this.formGroup = this.fb.group({
      image: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      password: ['', Validators.required],
      vat_number: ['', Validators.required],
      address: ['', Validators.required],
      capacity: ['', Validators.required],
      location: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      type: ['center']
    });
  }

  ngOnInit(): void {
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

  selectMarker($event: any) {
    this.coods.latitude = $event.coords.lat.toFixed(7);
    this.coods.longitude = $event.coords.lng.toFixed(7);
    this.formGroup.get("location").setValue(`${this.coods.longitude},${ this.coods.latitude }`);
    console.log(this.coods);
    console.log(this.formGroup.value)
  }

  mapClicked($event: any) {
    this.coods = {
      latitude: $event.coords.lat,
      longitude: $event.coords.lng,
    }
  }

  showPasswordHandler() {
    this.showPassword = !this.showPassword;
  }

  showConfirmPasswordHandler() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }


  onImagePicked(event) {
    this.uploadImageClass.uploadSingle(event); // Send the event to the upload function that will handle the operation for uploading image
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
