import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminaldetailComponent } from './criminaldetail.component';

describe('CriminaldetailComponent', () => {
  let component: CriminaldetailComponent;
  let fixture: ComponentFixture<CriminaldetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminaldetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminaldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
