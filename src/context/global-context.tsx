import { createContext, useState, Dispatch, SetStateAction } from "react";

interface User {
  name: string;
  email: string;
  role: string;
  createdAt: string;
}
const userLogin = JSON.parse(localStorage.getItem("user")!);

const initialValue = {
  name: userLogin.name,
  email: userLogin.email,
  role: userLogin.role,
  createdAt: userLogin.createdAt,
};

type ModalContextType = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

export const AppContext = createContext<ModalContextType>({ setUser: () => {}, user: initialValue });

export const GlobalContext = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState(initialValue);

  return <AppContext.Provider value={{ user, setUser }}>{children}</AppContext.Provider>;
};
