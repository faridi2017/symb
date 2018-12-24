import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpThreeComponent } from './cmp-three.component';

describe('CmpThreeComponent', () => {
  let component: CmpThreeComponent;
  let fixture: ComponentFixture<CmpThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmpThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
