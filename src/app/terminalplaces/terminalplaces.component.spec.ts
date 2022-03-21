import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalplacesComponent } from './terminalplaces.component';

describe('TerminalplacesComponent', () => {
  let component: TerminalplacesComponent;
  let fixture: ComponentFixture<TerminalplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalplacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
