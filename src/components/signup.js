import React from "react"
import { navigate, Link } from "gatsby"
import { handleLogin, isLoggedIn } from "../services/auth"
import FormStyles from './form.module.css';
import { css } from "@emotion/core"

class Login extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/app/profile`)
    }

    return (
      <>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event)
            navigate(`/app/profile`)
          }}
          className={FormStyles.container}
        >
          <div className={FormStyles.row}>
            <input className={FormStyles.input} type="text" name="username" onChange={this.handleUpdate} placeholder="Username"/>
          </div>
          <div className={FormStyles.row}>
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
              className={FormStyles.input} 
              placeholder="Password"
            />
          </div>
          <div className={FormStyles.row}>
            <input
              type="password"
              name="password"
              onChange={this.handleUpdate}
              className={FormStyles.input} 
              placeholder="Confirm Password"
            />
          </div>
          <input className={FormStyles.button} type="submit" value="Register" />
          <div css={css`padding-top:5px`}>Already have an account? <Link to="/app/login">Login</Link></div>
        </form>
      </>
    )
  }
}

export default Login