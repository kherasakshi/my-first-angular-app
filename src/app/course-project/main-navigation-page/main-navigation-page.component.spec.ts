import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavigationPageComponent } from './main-navigation-page.component';

describe('MainNavigationPageComponent', () => {
  let component: MainNavigationPageComponent;
  let fixture: ComponentFixture<MainNavigationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNavigationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainNavigationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
