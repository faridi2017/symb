import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpFiveComponent } from './cmp-five.component';

describe('CmpFiveComponent', () => {
  let component: CmpFiveComponent;
  let fixture: ComponentFixture<CmpFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
