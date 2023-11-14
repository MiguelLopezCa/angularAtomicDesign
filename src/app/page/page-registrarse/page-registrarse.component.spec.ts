import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegistrarseComponent } from './page-registrarse.component';

describe('PageRegistrarseComponent', () => {
  let component: PageRegistrarseComponent;
  let fixture: ComponentFixture<PageRegistrarseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRegistrarseComponent]
    });
    fixture = TestBed.createComponent(PageRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
