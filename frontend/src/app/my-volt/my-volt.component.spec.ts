import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVoltComponent } from './my-volt.component';

describe('MyVoltComponent', () => {
  let component: MyVoltComponent;
  let fixture: ComponentFixture<MyVoltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyVoltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVoltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
