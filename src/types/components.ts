import { Theme } from "@emotion/react";
import { StyledComponent } from "@emotion/styled";
import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";

export type SC<T> = StyledComponent<
  {
    theme?: Theme | undefined;
    as?: ElementType<any> | undefined;
  },
  DetailedHTMLProps<HTMLAttributes<T>, T>,
  Record<string, unknown>
>;
