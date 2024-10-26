import React from "react";

interface IPageTitleProps {
  text: string;
}

export function PageTitle(props: IPageTitleProps) {
  const { text, ...rest } = props;
  return (
    <h1 {...rest} className="text-center font-bold text-4xl ">
      {text}
    </h1>
  );
}
