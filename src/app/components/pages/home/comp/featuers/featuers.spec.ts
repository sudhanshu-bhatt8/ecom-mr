import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Featuers } from './featuers';

describe('Featuers', () => {
  let component: Featuers;
  let fixture: ComponentFixture<Featuers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Featuers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Featuers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
