import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTrialBoxComponent } from './header-trial-box.component';

describe('HeaderTrialBoxComponent', () => {
  let component: HeaderTrialBoxComponent;
  let fixture: ComponentFixture<HeaderTrialBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTrialBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTrialBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
