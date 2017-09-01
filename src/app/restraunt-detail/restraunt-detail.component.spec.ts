import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntDetailComponent } from './restraunt-detail.component';

describe('RestrauntDetailComponent', () => {
  let component: RestrauntDetailComponent;
  let fixture: ComponentFixture<RestrauntDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrauntDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrauntDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
