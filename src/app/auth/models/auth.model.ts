export interface USerGroupPolicy {
  policyId:string;
  policyTitle:string;
  policyDescription:string;
  isActive:boolean;
  developerId:string;
}

export interface UserGroup {
  groupId:string;
  groupName:string;
  groupDescription:string;
  isActive:boolean;
  createdBy:string;
  createdDateTime:Date;
  userPolicies:USerGroupPolicy[]
}

export interface User {
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  password:string;
  mobile:string;
  createdBy:string;
  createdDateTime:Date;
  isActive:boolean;
  userGroups:UserGroup[];
}
