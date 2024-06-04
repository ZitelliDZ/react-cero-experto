import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState({});

    const login = () => {
        setUser({
            id: 123,
            name: "Alejandro",
            email: ""
        });
    }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
