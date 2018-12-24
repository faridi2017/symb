import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpFourComponent } from './cmp-four.component';

describe('CmpFourComponent', () => {
  let component: CmpFourComponent;
  let fixture: ComponentFixture<CmpFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
