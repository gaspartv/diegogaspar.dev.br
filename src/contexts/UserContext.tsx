import { createContext, useState } from "react";
import { iContextProps, iUserContext } from "../interfaces";

const UserContext = createContext({} as iUserContext);

function UserProvider({ children }: iContextProps) {
  const [modalGuild, setModalGuild] = useState(false);

  return (
    <UserContext.Provider value={{ modalGuild, setModalGuild }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
