import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFrontCodePromoComponent } from './form-front-code-promo.component';

describe('FormFrontCodePromoComponent', () => {
  let component: FormFrontCodePromoComponent;
  let fixture: ComponentFixture<FormFrontCodePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFrontCodePromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFrontCodePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
