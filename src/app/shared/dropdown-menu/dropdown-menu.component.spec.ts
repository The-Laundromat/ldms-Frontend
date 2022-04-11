import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownMenuComponent } from './dropdown-menu.component';

describe('DropdownMenuComponent', () => {
  let component: DropdownMenuComponent;
  let fixture: ComponentFixture<DropdownMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  //should load
  it('should create', () => {
    expect(component).toBeTruthy();
  });

});