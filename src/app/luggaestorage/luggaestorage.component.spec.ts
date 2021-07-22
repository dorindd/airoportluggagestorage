import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuggaestorageComponent } from './luggaestorage.component';

describe('LuggaestorageComponent', () => {
  let component: LuggaestorageComponent;
  let fixture: ComponentFixture<LuggaestorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuggaestorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LuggaestorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
