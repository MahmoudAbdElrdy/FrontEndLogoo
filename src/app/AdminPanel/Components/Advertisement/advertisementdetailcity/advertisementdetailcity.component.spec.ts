import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementdetailcityComponent } from './advertisementdetailcity.component';

describe('AdvertisementdetailcityComponent', () => {
  let component: AdvertisementdetailcityComponent;
  let fixture: ComponentFixture<AdvertisementdetailcityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementdetailcityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementdetailcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
