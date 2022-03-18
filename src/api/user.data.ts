import {User} from "../app/models/auth.model";
import {BasicAuthLoginResponse} from "./models/responsePayloads.models";

export const USERDATA: User[] = [{
  createdBy: "Lahiru",
  createdDateTime: new Date(),
  email: "lahirus@99x.io",
  firstName: "Test",
  id: "U00001",
  isActive: true,
  lastName: "User",
  mobile: "0712277158",
  password: "Lahiru",
  authToken: "qwertyuiqewqweqwe",
  userGroups: [{
    groupId: "UG001",
    createdDateTime: new Date(),
    createdBy: "Lahiru",
    groupDescription: "Administration Group",
    groupName: "Admin",
    userPolicies: [{
      isActive: true,
      developerId: "LahiruDeveloper",
      policyDescription: "Admin Policy",
      policyId: "P00001",
      policyTitle: "ADMIN_OVERALL"
    }],
    isActive: true
  }]
}]

export function api_LoginFunction(email: string, password: string): BasicAuthLoginResponse {
  const user: User | undefined = USERDATA.find(selectedUser => selectedUser.email === email && selectedUser.password === password)
  if (user === undefined)
    return {
      data: {
        authSuccess: false,
        authError: 'Invalid Credentials'
      },
      metaDate: {
        requestCompleted: true,
        stackedErrors: false,
        serverDateTime: new Date().toDateString()
      }
    };
  return {
    data: {
      authSuccess: true,
      authData: user
    },
    metaDate: {
      requestCompleted: true,
      stackedErrors: false,
      serverDateTime: new Date().toDateString()
    }
  }
}

/**
 * This function use to find out whether the token is valid or not.
 * @param email - Logged in user email
 * @param token - User Token. This validation should be done using data hashing. Due to this function is in frontend it will ignore the verification.
 */
export function api_checkUserToken(email: string, token: string): BasicAuthLoginResponse {
  const user: User | undefined = USERDATA.find(selectedUser => selectedUser.email === email && selectedUser.isActive)
  if (user === undefined)
    return {
      data: {
        authSuccess: false,
        authError: 'Invalid Credentials'
      },
      metaDate: {
        requestCompleted: true,
        stackedErrors: false,
        serverDateTime: new Date().toDateString()
      }
    };
  return {
    data: {
      authSuccess: true,
      authData: user
    },
    metaDate: {
      requestCompleted: true,
      stackedErrors: false,
      serverDateTime: new Date().toDateString()
    }
  }
}

