import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementAddEditattachComponent } from './advertisement-add-editattach.component';

describe('AdvertisementAddEditattachComponent', () => {
  let component: AdvertisementAddEditattachComponent;
  let fixture: ComponentFixture<AdvertisementAddEditattachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementAddEditattachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementAddEditattachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
