import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementdetailAddEditattachvedioComponent } from './advertisementdetail-add-editattachvedio.component';

describe('AdvertisementdetailAddEditattachvedioComponent', () => {
  let component: AdvertisementdetailAddEditattachvedioComponent;
  let fixture: ComponentFixture<AdvertisementdetailAddEditattachvedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementdetailAddEditattachvedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementdetailAddEditattachvedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
