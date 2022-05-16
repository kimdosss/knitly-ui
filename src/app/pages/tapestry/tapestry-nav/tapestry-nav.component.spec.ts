import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapestryNavComponent } from './tapestry-nav.component';

describe('TapestryNavComponent', () => {
  let component: TapestryNavComponent;
  let fixture: ComponentFixture<TapestryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TapestryNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TapestryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
