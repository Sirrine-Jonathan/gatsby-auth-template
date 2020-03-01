import React from "react"
import { useStaticQuery, Link, navigate, graphql } from "gatsby"
import { getUser, isLoggedIn, logout } from "../services/auth"
import { css } from "@emotion/core"
import AppMenu from '../menus/AppMenu';
import AuthMenu from '../menus/AuthMenu';
import NavStyles from './nav.module.css';

const NavBar = ({ horizontalPadding, verticalPadding }) => {
  const content = { message: "", login: true }
  if (isLoggedIn()) {
    content.message = `Hello, ${getUser().name}`
  } else {
    content.message = "You are not logged in"
  }
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
    <nav
      css={css`
        display: flex;
        flex-grow: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: ${verticalPadding} ${horizontalPadding};
        background-color: #800000; 
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            display: inline-block;
            font-style: normal;
            color: #fff;
            line-height: unset;
            margin: 0;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <div>
      {isLoggedIn() ? (
        <AppMenu />
      ) : <AuthMenu />}
      </div>
    </nav>
  )
}
export default NavBar;