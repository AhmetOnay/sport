import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSoccerComponent } from './detail-soccer.component';

describe('DetailSoccerComponent', () => {
  let component: DetailSoccerComponent;
  let fixture: ComponentFixture<DetailSoccerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSoccerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSoccerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
