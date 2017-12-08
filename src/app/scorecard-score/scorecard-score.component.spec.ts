import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardScoreComponent } from './scorecard-score.component';

describe('ScorecardScoreComponent', () => {
  let component: ScorecardScoreComponent;
  let fixture: ComponentFixture<ScorecardScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecardScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
