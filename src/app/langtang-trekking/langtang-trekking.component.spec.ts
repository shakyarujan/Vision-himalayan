import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangtangTrekkingComponent } from './langtang-trekking.component';

describe('LangtangTrekkingComponent', () => {
  let component: LangtangTrekkingComponent;
  let fixture: ComponentFixture<LangtangTrekkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangtangTrekkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangtangTrekkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
