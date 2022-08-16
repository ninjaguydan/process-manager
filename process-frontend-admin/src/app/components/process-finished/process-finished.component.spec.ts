import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFinishedComponent } from './process-finished.component';

describe('ProcessFinishedComponent', () => {
  let component: ProcessFinishedComponent;
  let fixture: ComponentFixture<ProcessFinishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessFinishedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcessFinishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
