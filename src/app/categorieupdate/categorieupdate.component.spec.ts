import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieupdateComponent } from './categorieupdate.component';

describe('CategorieupdateComponent', () => {
  let component: CategorieupdateComponent;
  let fixture: ComponentFixture<CategorieupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
