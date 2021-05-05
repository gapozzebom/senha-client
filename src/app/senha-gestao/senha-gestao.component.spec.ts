import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaGestaoComponent } from './senha-gestao.component';

describe('SenhaGestaoComponent', () => {
  let component: SenhaGestaoComponent;
  let fixture: ComponentFixture<SenhaGestaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenhaGestaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaGestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
