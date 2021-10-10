import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNotificationComponent } from './single-notification.component';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';

describe('SingleNotificationComponent', () => {
  let component: SingleNotificationComponent;
  let fixture: ComponentFixture<SingleNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SingleNotificationComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleNotificationComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show test @input title', () => {
    component.notification.title = "test title";
    let title = fixture.debugElement.query(By.css('.single-notification__title'));
    let titleElement: HTMLElement = title.nativeElement;
    fixture.detectChanges();
    expect(titleElement.innerText).toEqual('test title');
  });


  it('should test @input number', () => {
    component.notification.number = 2;
    let number = fixture.debugElement.query(By.css('.single-notification__valueContainer__value'));
    let numberElement: HTMLElement = number.nativeElement;
    fixture.detectChanges();
    expect(numberElement.innerText).toEqual('2');
  });

});
