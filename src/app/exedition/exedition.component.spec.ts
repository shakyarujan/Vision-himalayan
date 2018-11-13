import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExeditionComponent } from './exedition.component';

describe('ExeditionComponent', () => {
  let component: ExeditionComponent;
  let fixture: ComponentFixture<ExeditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExeditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExeditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
