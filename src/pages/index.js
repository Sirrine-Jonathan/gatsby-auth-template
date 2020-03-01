import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import { getUser, isLoggedIn } from "../services/auth"

import Layout from "../components/layout"

export default () => (
  <Layout>
    
    <div css={css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}>
      <h1>Hello{isLoggedIn() ? ", " + getUser().name : ""}</h1>
      <div>
      {isLoggedIn() ? (
        <>
          Check out your{" "}
          <Link to="/app/account">profile</Link>
        </>
      ) : (
        <>
          <Link to="/app/signup">Sign Up</Link> | <Link to="/app/login">Log In</Link>
        </>
      )}
      </div> 
    </div>
  </Layout>
)