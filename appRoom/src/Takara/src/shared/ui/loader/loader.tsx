import React, { FC } from 'react';
import loader from "./Frame.svg"
import cn from "classnames";

export const Loader: FC<{small? : boolean}> = ({small = false}) => {
  return (
      <img  className={cn('loader', {
        'loader-min': small,
      })}  src="/img/Frame 1.svg" alt=""/>
  );
};
