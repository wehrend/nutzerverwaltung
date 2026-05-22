import type { userManagmentState } from "../hooks/userManagementReducer";
import type { userManagementAction } from "../hooks/userManagementReducer";
import { createContext } from "react";

export const UserContext = createContext<{
  users: userManagmentState;
  usersDispatch: React.ActionDispatch<[action: userManagementAction]>;
}>({ users: [], usersDispatch: () => {} });
