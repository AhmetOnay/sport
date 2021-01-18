import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSoccerComponent } from './add-soccer.component';

describe('AddSoccerComponent', () => {
  let component: AddSoccerComponent;
  let fixture: ComponentFixture<AddSoccerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSoccerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
