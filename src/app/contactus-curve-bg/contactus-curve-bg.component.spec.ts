import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusCurveBgComponent } from './contactus-curve-bg.component';

describe('ContactusCurveBgComponent', () => {
  let component: ContactusCurveBgComponent;
  let fixture: ComponentFixture<ContactusCurveBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactusCurveBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactusCurveBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
