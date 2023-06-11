import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListmateriPage } from './listmateri.page';

describe('ListmateriPage', () => {
  let component: ListmateriPage;
  let fixture: ComponentFixture<ListmateriPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListmateriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
