import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorecardPlayerComponent } from './scorecard-player.component';

describe('ScorecardPlayerComponent', () => {
  let component: ScorecardPlayerComponent;
  let fixture: ComponentFixture<ScorecardPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScorecardPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorecardPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
