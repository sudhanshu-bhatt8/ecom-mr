import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionBanner } from './promotion-banner';

describe('PromotionBanner', () => {
  let component: PromotionBanner;
  let fixture: ComponentFixture<PromotionBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromotionBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromotionBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
