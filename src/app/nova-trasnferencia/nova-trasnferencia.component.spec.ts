import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTrasnferenciaComponent } from './nova-trasnferencia.component';

describe('NovaTrasnferenciaComponent', () => {
  let component: NovaTrasnferenciaComponent;
  let fixture: ComponentFixture<NovaTrasnferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaTrasnferenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTrasnferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
