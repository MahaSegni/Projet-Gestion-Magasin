import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierVideComponent } from './panier-vide.component';

describe('PanierVideComponent', () => {
  let component: PanierVideComponent;
  let fixture: ComponentFixture<PanierVideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierVideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierVideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
