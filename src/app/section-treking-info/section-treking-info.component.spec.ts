import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTrekingInfoComponent } from './section-treking-info.component';

describe('SectionTrekingInfoComponent', () => {
  let component: SectionTrekingInfoComponent;
  let fixture: ComponentFixture<SectionTrekingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTrekingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTrekingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
