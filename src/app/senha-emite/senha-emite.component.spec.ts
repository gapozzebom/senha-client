import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhaEmiteComponent } from './senha-emite.component';

describe('SenhaEmiteComponent', () => {
  let component: SenhaEmiteComponent;
  let fixture: ComponentFixture<SenhaEmiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenhaEmiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenhaEmiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
