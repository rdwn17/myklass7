import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormtugasPage } from './formtugas.page';

describe('FormtugasPage', () => {
  let component: FormtugasPage;
  let fixture: ComponentFixture<FormtugasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormtugasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
