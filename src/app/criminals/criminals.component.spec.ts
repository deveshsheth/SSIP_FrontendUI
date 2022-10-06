import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalsComponent } from './criminals.component';

describe('CriminalsComponent', () => {
  let component: CriminalsComponent;
  let fixture: ComponentFixture<CriminalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriminalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
