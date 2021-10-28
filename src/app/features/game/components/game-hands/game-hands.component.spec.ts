import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHandsComponent } from './game-hands.component';

describe('GameHandsComponent', () => {
  let component: GameHandsComponent;
  let fixture: ComponentFixture<GameHandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
