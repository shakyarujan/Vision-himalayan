import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusFooterAddressComponent } from './contactus-footer-address.component';

describe('ContactusFooterAddressComponent', () => {
  let component: ContactusFooterAddressComponent;
  let fixture: ComponentFixture<ContactusFooterAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusFooterAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusFooterAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
