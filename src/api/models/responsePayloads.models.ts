import {User} from "../../app/core/auth/models/auth.model";

export interface BasicAuthLoginResponse {
  data:{
    authSuccess:boolean;
    authError?:string;
    authData?:User
  },
  metaDate:{
    requestCompleted: boolean,
    stackedErrors?: any,
    serverDateTime: string;
  }
}
