import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedeskDetailComponent } from './pokedesk-detail.component';

describe('PokedeskDetailComponent', () => {
  let component: PokedeskDetailComponent;
  let fixture: ComponentFixture<PokedeskDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedeskDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedeskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
