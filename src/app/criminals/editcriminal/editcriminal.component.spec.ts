import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcriminalComponent } from './editcriminal.component';

describe('EditcriminalComponent', () => {
  let component: EditcriminalComponent;
  let fixture: ComponentFixture<EditcriminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcriminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcriminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
