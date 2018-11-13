import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusFooterComponent } from './contactus-footer.component';

describe('ContactusFooterComponent', () => {
  let component: ContactusFooterComponent;
  let fixture: ComponentFixture<ContactusFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
