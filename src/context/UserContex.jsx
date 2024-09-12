import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isConsulted, setIsConsulted] = useState(false);

  const handleConsult = (consultValue) => {
    setIsConsulted(consultValue);
  };
  return <UserContext.Provider value={{ isConsulted, handleConsult }}>{children}</UserContext.Provider>;
};
