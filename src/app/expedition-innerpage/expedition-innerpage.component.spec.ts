import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionInnerpageComponent } from './expedition-innerpage.component';

describe('ExpeditionInnerpageComponent', () => {
  let component: ExpeditionInnerpageComponent;
  let fixture: ComponentFixture<ExpeditionInnerpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditionInnerpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionInnerpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
