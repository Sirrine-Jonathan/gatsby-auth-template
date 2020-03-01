import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { css } from "@emotion/core"
const Footer = ({verticalPadding, horizontalPadding}) => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return (
        <div 
            css={css`
                display: flex;
                flex-grow: 0;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                padding: ${verticalPadding} ${horizontalPadding};
                background-color: #800000; 
                color: #fff;
            `}
        >
            &copy; {new Date().getFullYear()}, {data.site.siteMetadata.title}
        </div>
    )
}

export default Footer;