import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesUploadIconComponent } from './files-upload-icon.component';

describe('FilesUploadIconComponent', () => {
  let component: FilesUploadIconComponent;
  let fixture: ComponentFixture<FilesUploadIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesUploadIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesUploadIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
