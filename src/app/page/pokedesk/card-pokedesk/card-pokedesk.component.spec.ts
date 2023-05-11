import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPokedeskComponent } from './card-pokedesk.component';

describe('CardPokedeskComponent', () => {
  let component: CardPokedeskComponent;
  let fixture: ComponentFixture<CardPokedeskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardPokedeskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPokedeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
