import { createContext } from "react";
import { iContextProps, iUserContext } from "../interfaces";

const UserContext = createContext({} as iUserContext);

function UserProvider({ children }: iContextProps) {
  return (
    <UserContext.Provider value={{ children }}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserProvider };
