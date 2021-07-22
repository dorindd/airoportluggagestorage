import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockercodeComponent } from './lockercode.component';

describe('LockercodeComponent', () => {
  let component: LockercodeComponent;
  let fixture: ComponentFixture<LockercodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockercodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
