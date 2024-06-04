import { types } from "../types/types";

export interface User {
  id: string;
  name: string;
}
interface Action {
  type: string;
  payload: User;
}

 
 

export const authReducer = (state = {}, action: Action) => {


  switch (action.type) {
    case types.login:
      return { 
        logged: true,
        user:  action.payload,
      };

    case types.logout:
      return { 
        logged: false,
        user: null,
      };

    default:
      return state;
  }
};
