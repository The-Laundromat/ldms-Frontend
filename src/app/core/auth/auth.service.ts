import {EventEmitter, Injectable} from '@angular/core';
import {api_checkUserToken, api_LoginFunction} from "../../../api/user.data";
import {User, USerGroupPolicy} from "./models/auth.model";
import {Router} from "@angular/router";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInUser?: User;
  private readonly userGroupPolicies: USerGroupPolicy[] | undefined;
  private userChange: Subject<User> = new Subject<User>();
  authChangeEvent = new EventEmitter<User|false>();

  constructor(private router: Router) {
    this.userGroupPolicies = undefined;
    this.userChange.subscribe(value => {
      this.loggedInUser = value;
    })
  }

  public getLoggedInUser(): User | boolean {
    return !!this.loggedInUser
  }

  public loginUsingBasicCredentials(email: string, password: string): boolean {
    const loginResult = api_LoginFunction(email, password);
    if (loginResult.data.authSuccess && loginResult.data.authData) {
      this._userDetailStoreInLocalStorage(loginResult.data.authData, loginResult.data.authData.authToken)
      this.authChangeEvent.emit(this.loggedInUser)
      return true;
    }else {
      return false
    }
  }

  public basicLogin(): boolean {
    if (this.loggedInUser) {
      return true;
    } else {
      const localStore_userToken: string | null = localStorage.getItem(('loggedInUserToken'))
      const localStore_userEmail: string | null = localStorage.getItem(('loggedInUserEmail'))

      if (localStore_userToken && localStore_userEmail) {
        const loginResult = api_checkUserToken(localStore_userEmail, localStore_userToken);
        if (loginResult.data.authSuccess && loginResult.data.authData) {
          this._userDetailStoreInLocalStorage(loginResult.data.authData, loginResult.data.authData.authToken)
          this.authChangeEvent.emit(this.loggedInUser)
          return true;
        }else {
          return false
        }
      } else {
        return false;
      }
    }
  }

  private _userDetailStoreInLocalStorage(user: User, userToken: string): boolean {
      this.userChange.next(user);
      for (const userGroups of user.userGroups) {
        userGroups.userPolicies.map(policy => this.userGroupPolicies?.push(policy));
      }
      localStorage.setItem('loggedInUserToken', userToken)
      localStorage.setItem('loggedInUserEmail', user.email)
      return true;
  }

  public signOut(): void {
    localStorage.clear()
    this.loggedInUser = undefined;
    this.authChangeEvent.emit(false);
    this.router.navigate(['/login'])
  }
}
