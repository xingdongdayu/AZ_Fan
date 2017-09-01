import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrauntsComponent } from './restraunts.component';

describe('RestrauntsComponent', () => {
  let component: RestrauntsComponent;
  let fixture: ComponentFixture<RestrauntsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrauntsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrauntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
