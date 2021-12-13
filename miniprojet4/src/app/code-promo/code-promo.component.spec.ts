import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePromoComponent } from './code-promo.component';

describe('CodePromoComponent', () => {
  let component: CodePromoComponent;
  let fixture: ComponentFixture<CodePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodePromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
