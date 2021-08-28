import { css, Global } from "@emotion/react";

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
          margin: 0;
      `}
    />
  );
};

export default GlobalStyle;
