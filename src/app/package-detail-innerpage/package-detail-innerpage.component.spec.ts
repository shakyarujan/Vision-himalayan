import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageDetailInnerpageComponent } from './package-detail-innerpage.component';

describe('PackageDetailInnerpageComponent', () => {
  let component: PackageDetailInnerpageComponent;
  let fixture: ComponentFixture<PackageDetailInnerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageDetailInnerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageDetailInnerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
