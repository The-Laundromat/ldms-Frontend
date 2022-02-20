import {User} from "../app/auth/models/auth.model";

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

export function api_LoginFunction(email: string, password: string) {
  const user: User | undefined = USERDATA.find(selectedUser => selectedUser.email === email && selectedUser.password === password)
  return {
    data: {
      userData: user,
      userToken:"helo@123"
    },
    meta: {
      requestCompleted: true,
      stackedErrors: false,
      serverDateTime: new Date()
    }
  }
}

/**
 * This function use to find out whether the token is valid or not.
 * @param email - Logged in user email
 * @param token - User Token. This validation should be done using data hashing. Due to this function is in frontend it will ignore the verification.
 */
export function api_checkUserToken(email:string,token:string){
  const user: User | undefined = USERDATA.find(selectedUser => selectedUser.email === email && selectedUser.isActive)
  return {
    data: {
      userData: user,
      userToken:"helo@123"
    },
    meta: {
      requestCompleted: true,
      stackedErrors: false,
      serverDateTime: new Date()
    }
  }
}

