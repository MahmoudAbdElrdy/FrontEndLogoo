import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementAddEditcategoryComponent } from './advertisement-add-editcategory.component';

describe('AdvertisementAddEditcategoryComponent', () => {
  let component: AdvertisementAddEditcategoryComponent;
  let fixture: ComponentFixture<AdvertisementAddEditcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementAddEditcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementAddEditcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
