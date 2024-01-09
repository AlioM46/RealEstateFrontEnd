import React from "react";
import "./button.css";

export const PrimaryButton = ({children}) => {
  return <button className={"primaryButton btn"}>{children}</button>;
};

export const SecondaryButton = ({children}) => {
  return <button className={"secondaryButton btn"}>{children}</button>;
};
