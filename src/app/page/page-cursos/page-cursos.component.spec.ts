import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCursosComponent } from './page-cursos.component';

describe('PageCursosComponent', () => {
  let component: PageCursosComponent;
  let fixture: ComponentFixture<PageCursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCursosComponent]
    });
    fixture = TestBed.createComponent(PageCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
