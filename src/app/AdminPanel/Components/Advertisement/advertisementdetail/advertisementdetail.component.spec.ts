import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementdetailComponent } from './advertisementdetail.component';

describe('AdvertisementdetailComponent', () => {
  let component: AdvertisementdetailComponent;
  let fixture: ComponentFixture<AdvertisementdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
