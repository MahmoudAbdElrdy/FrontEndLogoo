import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementAddEditCityComponent } from './advertisement-add-edit-city.component';

describe('AdvertisementAddEditCityComponent', () => {
  let component: AdvertisementAddEditCityComponent;
  let fixture: ComponentFixture<AdvertisementAddEditCityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementAddEditCityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementAddEditCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
