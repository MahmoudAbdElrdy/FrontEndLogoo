import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementdetailcategoryComponent } from './advertisementdetailcategory.component';

describe('AdvertisementdetailcategoryComponent', () => {
  let component: AdvertisementdetailcategoryComponent;
  let fixture: ComponentFixture<AdvertisementdetailcategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementdetailcategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementdetailcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
