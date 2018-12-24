import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpSixComponent } from './cmp-six.component';

describe('CmpSixComponent', () => {
  let component: CmpSixComponent;
  let fixture: ComponentFixture<CmpSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
