import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTrialsComponent } from './past-trials.component';

describe('PastTrialsComponent', () => {
  let component: PastTrialsComponent;
  let fixture: ComponentFixture<PastTrialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTrialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTrialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
