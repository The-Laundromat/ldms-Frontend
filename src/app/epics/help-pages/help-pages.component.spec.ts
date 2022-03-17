import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpPagesComponent } from './help-pages.component';

describe('HelpPagesComponent', () => {
  let component: HelpPagesComponent;
  let fixture: ComponentFixture<HelpPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
