import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementdetailattachvedioComponent } from './advertisementdetailattachvedio.component';

describe('AdvertisementdetailattachvedioComponent', () => {
  let component: AdvertisementdetailattachvedioComponent;
  let fixture: ComponentFixture<AdvertisementdetailattachvedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementdetailattachvedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementdetailattachvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
