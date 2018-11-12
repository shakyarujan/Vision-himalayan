import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBgComponent } from './footer-bg.component';

describe('FooterBgComponent', () => {
  let component: FooterBgComponent;
  let fixture: ComponentFixture<FooterBgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
