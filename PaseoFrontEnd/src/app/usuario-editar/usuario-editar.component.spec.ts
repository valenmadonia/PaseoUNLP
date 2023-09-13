import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEditarComponent } from './usuario-editar.component';

describe('UsuarioEditarComponent', () => {
  let component: UsuarioEditarComponent;
  let fixture: ComponentFixture<UsuarioEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioEditarComponent]
    });
    fixture = TestBed.createComponent(UsuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
