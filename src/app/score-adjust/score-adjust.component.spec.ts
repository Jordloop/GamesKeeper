import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreAdjustComponent } from './score-adjust.component';

describe('ScoreAdjustComponent', () => {
  let component: ScoreAdjustComponent;
  let fixture: ComponentFixture<ScoreAdjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreAdjustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreAdjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
