import type { User } from "../types/User";

type userManagmentState = User[];

type userManagementAction = {
  type: "ADD_USER" | "REMOVE_USER" | "UPDATE_USER";
  user: User;
};

export default function userManagementReducer(
  prevState: userManagmentState,
  action: userManagementAction,
) {
  let updatedState: userManagmentState;

  switch (action.type) {
    case "ADD_USER": {
      updatedState = [...prevState, action.user];
      break;
    }
    case "REMOVE_USER": {
      updatedState = prevState.filter((user) => user.id !== action.user.id);
      break;
    }
    case "UPDATE_USER": {
      updatedState = prevState.map((user) =>
        user.id === action.user.id ? action.user : user,
      );
      break;
    }
    default: {
      updatedState = prevState;
      break;
    }
  }
  localStorage.setItem("users", JSON.stringify(updatedState));
  return updatedState;
}
