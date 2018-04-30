import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioFilterComponent } from './portfolio-filter.component';

describe('PortfolioFilterComponent', () => {
  let component: PortfolioFilterComponent;
  let fixture: ComponentFixture<PortfolioFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
