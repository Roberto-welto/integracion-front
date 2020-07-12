import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonacionModalComponent } from './donacion-modal.component';

describe('DonacionModalComponent', () => {
  let component: DonacionModalComponent;
  let fixture: ComponentFixture<DonacionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonacionModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonacionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
