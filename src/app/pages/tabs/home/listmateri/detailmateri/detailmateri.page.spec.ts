import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailmateriPage } from './detailmateri.page';

describe('DetailmateriPage', () => {
  let component: DetailmateriPage;
  let fixture: ComponentFixture<DetailmateriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailmateriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
