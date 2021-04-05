import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementdetailattachComponent } from './advertisementdetailattach.component';

describe('AdvertisementdetailattachComponent', () => {
  let component: AdvertisementdetailattachComponent;
  let fixture: ComponentFixture<AdvertisementdetailattachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementdetailattachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementdetailattachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
