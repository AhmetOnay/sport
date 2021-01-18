import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoccerComponent } from './edit-soccer.component';

describe('EditSoccerComponent', () => {
  let component: EditSoccerComponent;
  let fixture: ComponentFixture<EditSoccerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSoccerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
