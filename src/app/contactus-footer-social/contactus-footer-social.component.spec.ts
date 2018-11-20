import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusFooterSocialComponent } from './contactus-footer-social.component';

describe('ContactusFooterSocialComponent', () => {
  let component: ContactusFooterSocialComponent;
  let fixture: ComponentFixture<ContactusFooterSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusFooterSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusFooterSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
