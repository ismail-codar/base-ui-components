import React, { FC, useState } from "react";

export const ConversationIcon: FC<{
  svg?: React.SVGProps<SVGSVGElement>;
  path?: React.SVGProps<SVGPathElement>;
}> = ({ svg, path }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...svg}
    >
      <path
        d="M5.66671 12.6667H5.33337C2.66671 12.6667 1.33337 12 1.33337 8.66671V5.33337C1.33337 2.66671 2.66671 1.33337 5.33337 1.33337H10.6667C13.3334 1.33337 14.6667 2.66671 14.6667 5.33337V8.66671C14.6667 11.3334 13.3334 12.6667 10.6667 12.6667H10.3334C10.1267 12.6667 9.92671 12.7667 9.80004 12.9334L8.80004 14.2667C8.36004 14.8534 7.64004 14.8534 7.20004 14.2667L6.20004 12.9334C6.09337 12.7867 5.84671 12.6667 5.66671 12.6667Z"
        stroke="#1F1F1F"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...path}
      />
    </svg>
  );
};
