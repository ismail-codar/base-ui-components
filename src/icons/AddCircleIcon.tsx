import React, { FC, useState } from "react";

export const AddCircleIcon: FC<{
  svg?: React.SVGProps<SVGSVGElement>;
  path?: React.SVGProps<SVGPathElement>;
}> = ({
  svg,
  path = {
    stroke: "black",
  },
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...svg}
    >
      <g
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...path}
      >
        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" />
        <path d="M8 12H16" />
        <path d="M12 16V8" />
      </g>
    </svg>
  );
};
