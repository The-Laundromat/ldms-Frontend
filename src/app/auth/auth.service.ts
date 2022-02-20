import {Injectable} from '@angular/core';
import {api_checkUserToken, api_LoginFunction} from "../../data/user.data";
import {User, USerGroupPolicy} from "./models/auth.model";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInUser: User | boolean;
  private readonly userGroupPolicies: USerGroupPolicy[] | undefined;
  private userChange: Subject<User> = new Subject<User>();

  constructor(private router: Router) {
    this.loggedInUser = false;
    this.userGroupPolicies = undefined;
    this.userChange.subscribe(value => {
      this.loggedInUser = value;
    })
  }

  public getLoggedInUser(): User | boolean {
    return this.loggedInUser;
  }

  public isAuthenticated(): boolean {
    return !!this.loggedInUser;
  }

  public getUserGroupPolicies(): USerGroupPolicy[] | undefined {
    return this.userGroupPolicies;
  }

  public login(email: string, password: string): boolean {
    const loginResult = api_LoginFunction(email, password);
    return this._userDetailInsertFunction(loginResult.data.userData, loginResult.data.userToken)
  }

  public basicLogin(): boolean {
    if (this.loggedInUser) {
      return true;
    } else {
      const localStore_userToken: string | null = localStorage.getItem(('loggedInUserToken'))
      const localStore_userEmail: string | null = localStorage.getItem(('loggedInUserEmail'))
      if (localStore_userToken && localStore_userEmail) {
        const loginResult = api_checkUserToken(localStore_userEmail, localStore_userToken);
        return this._userDetailInsertFunction(loginResult.data.userData, loginResult.data.userToken)
      } else {
        return false;
      }
    }
  }

  private _userDetailInsertFunction(user: User | undefined, userToken: string): boolean {
    if (user) {
      this.userChange.next(user);
      for (const userGroups of user.userGroups) {
        userGroups.userPolicies.map(policy => this.userGroupPolicies?.push(policy));
      }
      localStorage.setItem('loggedInUserToken', userToken)
      localStorage.setItem('loggedInUserEmail', user.email)
      return true;
    } else {
      return false;
    }
  }

  public signOut(): void {
    localStorage.clear()
    this.loggedInUser = false;
    this.router.navigate(['/login'])
  }
}
