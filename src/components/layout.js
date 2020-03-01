import React from "react"
import { css } from "@emotion/core"
import NavBar from './nav';
import Footer from './footer';

const horizontalPadding = '15px';
const verticalPadding = '15px';

export default ({ children }) => {
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
      `}
    >
      <NavBar horizontalPadding={horizontalPadding} verticalPadding={verticalPadding}/>
      <div css={css`padding: ${verticalPadding} ${horizontalPadding}; flex: 1`}>{children}</div>
      <Footer horizontalPadding={horizontalPadding} verticalPadding={verticalPadding}/>
    </div>
  )
}