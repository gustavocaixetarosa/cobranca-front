import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPagamentosComponent } from './lista-pagamentos.component';

describe('ListaPagamentosComponent', () => {
  let component: ListaPagamentosComponent;
  let fixture: ComponentFixture<ListaPagamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaPagamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
