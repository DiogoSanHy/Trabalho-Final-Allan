import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarResComponent } from './visualizar-res.component';

describe('VisualizarResComponent', () => {
  let component: VisualizarResComponent;
  let fixture: ComponentFixture<VisualizarResComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizarResComponent]
    });
    fixture = TestBed.createComponent(VisualizarResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
