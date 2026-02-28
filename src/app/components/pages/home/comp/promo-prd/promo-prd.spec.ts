import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPrd } from './promo-prd';

describe('PromoPrd', () => {
  let component: PromoPrd;
  let fixture: ComponentFixture<PromoPrd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoPrd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoPrd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
