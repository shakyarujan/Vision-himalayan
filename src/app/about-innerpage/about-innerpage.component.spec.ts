import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInnerpageComponent } from './about-innerpage.component';

describe('AboutInnerpageComponent', () => {
  let component: AboutInnerpageComponent;
  let fixture: ComponentFixture<AboutInnerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutInnerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutInnerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
