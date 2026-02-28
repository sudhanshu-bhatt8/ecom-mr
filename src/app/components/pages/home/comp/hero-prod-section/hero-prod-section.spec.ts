import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroProdSection } from './hero-prod-section';

describe('HeroProdSection', () => {
  let component: HeroProdSection;
  let fixture: ComponentFixture<HeroProdSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroProdSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroProdSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
