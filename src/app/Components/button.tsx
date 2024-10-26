import React from "react";
import { FaPlus } from "react-icons/fa";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;

}

export function Button(props: IButtonProps) {
  const { text, icon,className, ...rest } = props;
  return (
    <button {...rest} className={`flex ${className || ""}`}>
      {text}
      <span>{icon}</span>
    </button>
  );
}
