import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string; 
  }
  
  const Input: React.FC<InputProps> = ({ className = "", ...rest }) => {
    return (
      <input
        className={`h-12 rounded-lg w-2/3 border outline-none ${className}`}
        {...rest}
      />
    );
  };
  
  export default Input;