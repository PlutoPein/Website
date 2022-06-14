import React, { FC, ReactNode, useState } from "react";
import CustomCursorContext, {
  CursorLookType,
} from "../context/CustomCursorContext";

interface Props {
  // any props that come into the component
  children?: ReactNode;
}


const CustomCursorManager : FC< Props> = ({ children }) => {
  const [type, setType] = useState<CursorLookType>("default");

  return (
    <CustomCursorContext.Provider value={{ type, setType }}>
      {children}
    </CustomCursorContext.Provider>
  );
};

export default CustomCursorManager;