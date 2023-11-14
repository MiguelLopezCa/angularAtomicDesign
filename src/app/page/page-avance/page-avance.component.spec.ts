import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAvanceComponent } from './page-avance.component';

describe('PageAvanceComponent', () => {
  let component: PageAvanceComponent;
  let fixture: ComponentFixture<PageAvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAvanceComponent]
    });
    fixture = TestBed.createComponent(PageAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
