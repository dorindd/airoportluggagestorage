import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveluggageComponent } from './removeluggage.component';

describe('RemoveluggageComponent', () => {
  let component: RemoveluggageComponent;
  let fixture: ComponentFixture<RemoveluggageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveluggageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveluggageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
