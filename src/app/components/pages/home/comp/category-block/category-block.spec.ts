import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryBlock } from './category-block';

describe('CategoryBlock', () => {
  let component: CategoryBlock;
  let fixture: ComponentFixture<CategoryBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
