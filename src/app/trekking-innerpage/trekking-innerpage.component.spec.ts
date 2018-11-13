import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkingInnerpageComponent } from './trekking-innerpage.component';

describe('TrekkingInnerpageComponent', () => {
  let component: TrekkingInnerpageComponent;
  let fixture: ComponentFixture<TrekkingInnerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrekkingInnerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkingInnerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
