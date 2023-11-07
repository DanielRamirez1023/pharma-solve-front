import { createContext, useState, Dispatch, SetStateAction } from "react";
import { Medicine } from "../components/types";

type ModalContextType = {
  item: Medicine;
  setItem: Dispatch<SetStateAction<Medicine>>;
};

const initialValue = {
  amount: 0,
  completed: false,
  createdAt: "",
  description: "",
  laboratory: "",
  name: "",
  pharmacy: "",
  _id: "",
};

export const AppContext = createContext<ModalContextType>({ setItem: () => {}, item: initialValue });

export const GlobalContext = ({ children }: { children: JSX.Element }) => {
  const [item, setItem] = useState(initialValue);

  return <AppContext.Provider value={{ item, setItem }}>{children}</AppContext.Provider>;
};
