import React from "react";
import { useReducer, createContext } from "react";
const initState = {
  Name: "",
  Age: "",
  DOB: "",
  State: "",
  Address: "",
  Pin: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "Name":
      return { ...state, Name: action.payload };
    case "Age":
      return { ...state, Age: action.payload };
    case "DOB":
      return { ...state, DOB: action.payload };
    case "State":
      return { ...state, State: action.payload };
    case "Address":
      return { ...state, Address: action.payload };
    case "Pin":
      return { ...state, Pin: action.payload };

    default:
      throw new Error();
  }
};

export const RegistartionContext = createContext();

export function RegistartionContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const { Name, Age, DOB, State, Address, Pin } = state;
  return (
    <RegistartionContext.Provider
      value={{ Name, Age, DOB, State, Address, Pin, dispatch }}
    >
      {children}
    </RegistartionContext.Provider>
  );
}
