import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoExploreComponent } from './go-explore.component';

describe('GoExploreComponent', () => {
  let component: GoExploreComponent;
  let fixture: ComponentFixture<GoExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
