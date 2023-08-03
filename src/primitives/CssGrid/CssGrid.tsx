import React, { useMemo } from "react";
import clsx from "clsx";
import { styled, CSS } from "@stitches/react";

type Grow<T, A extends Array<T>> = ((x: T, ...xs: A) => void) extends (
  ...a: infer X
) => void
  ? X
  : never;
type GrowToSize<T, A extends Array<T>, N extends number> = {
  0: A;
  1: GrowToSize<T, Grow<T, A>, N>;
}[A["length"] extends N ? 0 : 1];

export type FixedArray<T, N extends number> = Array<T> & GrowToSize<T, [], N>;

export interface CssGridProps<
  N extends string,
  C extends number,
  R extends number
> {
  layout: FixedArray<FixedArray<N, C>, R>;
  rows: FixedArray<string, R>;
  columns: FixedArray<string, C>;
  containerStyle?: CSS;
  className?: string;
  childstyle?: { [key in N]?: CSS };
  childs: { [key in N]: React.ReactNode };
}

const CssGridContainer = styled("div");
const CssGridChild = styled("div");

export const CssGrid = <N extends string, C extends number, R extends number>(
  props: CssGridProps<N, C, R>
) => {
  const keys = Object.keys(props.childs);
  const cssChilds = useMemo(() => {
    const obj: { [key: string]: any } = {};
    keys.forEach((key) => {
      obj[key] = { gridArea: key };
    });
    return obj;
  }, [keys]);

  return (
    <CssGridContainer
      css={{
        display: "grid",
        gridTemplateAreas: props.layout
          .map((item) => '"' + item.join(" ") + '"')
          .join("\n"),
        gridTemplateRows: (props.rows || []).join(" "),
        gridTemplateColumns: (props.columns || []).join(" "),
        ...props.containerStyle,
      }}
      className={clsx(props.className)}
    >
      {keys.map((key) => {
        const childKey = key as N;
        return (
          <CssGridChild
            css={{
              ...cssChilds[key],
              ...props.childstyle,
            }}
            key={key}
          >
            {props.childs[childKey]}
          </CssGridChild>
        );
      })}
    </CssGridContainer>
  );
};
