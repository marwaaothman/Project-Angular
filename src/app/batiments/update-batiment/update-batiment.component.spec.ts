import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBatimentComponent } from './update-batiment.component';

describe('UpdateBatimentComponent', () => {
  let component: UpdateBatimentComponent;
  let fixture: ComponentFixture<UpdateBatimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBatimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBatimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
