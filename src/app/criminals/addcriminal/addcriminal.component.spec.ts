import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcriminalComponent } from './addcriminal.component';

describe('AddcriminalComponent', () => {
  let component: AddcriminalComponent;
  let fixture: ComponentFixture<AddcriminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcriminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
