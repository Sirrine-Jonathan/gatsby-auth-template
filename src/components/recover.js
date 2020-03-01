import React from 'react'
import { isLoggedIn } from "../services/auth"
import { navigate, Link } from "gatsby"
import FormStyles from './form.module.css';
import { css } from "@emotion/core"

class Recover extends React.Component {
    state = {
      username: ``,
      password: ``,
    }
  
    render() {
      if (isLoggedIn()) {
        navigate(`/app/profile`)
      }
  
      return (
        <>
          <div css={css`margin: auto; width: 50%; text-align: center`}>
              Send us your email!<br />
              we'll get you straightened out
          </div>
          <form
            method="post"
            onSubmit={event => {
              this.handleSubmit(event)
              navigate(`/app/profile`)
            }}
            className={FormStyles.container}
          >
            <div className={FormStyles.row}>
              <input className={FormStyles.input} type="email" name="email" onChange={this.handleUpdate} placeholder="Email"/>
            </div>
            <input className={FormStyles.button} type="submit" value="Send Recovery Email" />
          </form>
        </>
      )
    }
  }

export default Recover;