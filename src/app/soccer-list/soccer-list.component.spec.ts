import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerListComponent } from './soccer-list.component';

describe('SoccerListComponent', () => {
  let component: SoccerListComponent;
  let fixture: ComponentFixture<SoccerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
