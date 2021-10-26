import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOptionsListComponent } from './game-options-list.component';

describe('GameOptionsListComponent', () => {
  let component: GameOptionsListComponent;
  let fixture: ComponentFixture<GameOptionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOptionsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOptionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
