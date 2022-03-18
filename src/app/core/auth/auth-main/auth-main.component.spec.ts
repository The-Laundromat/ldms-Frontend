import {TestBed, waitForAsync} from "@angular/core/testing";
import {AuthMainComponent} from "./auth-main.component";
import {RouterTestingModule} from "@angular/router/testing";
import {NavbarComponent} from "../../../shared/navbar/navbar.component";
import {SideNavbarComponent} from "../../../shared/side-navbar/side-navbar.component";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {AuthService} from "../auth.service";

describe('Auth main component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthMainComponent, NavbarComponent, SideNavbarComponent],
      imports: [RouterTestingModule]
    })
  })

  it('Create auth component', () => {
    let fixture = TestBed.createComponent(AuthMainComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  })

  it('Test auto route function if user logged in',()=>{
    let fixture = TestBed.createComponent(AuthMainComponent);
    let app = fixture.debugElement.componentInstance;
    let authService = fixture.debugElement.injector.get(AuthService)
    fixture.detectChanges();
    expect(authService.getLoggedInUser()).toEqual(false);
  })

})
