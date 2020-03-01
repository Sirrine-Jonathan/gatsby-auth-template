import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"
import Signup from "../components/signup"
import Recover from "../components/recover"
const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/account" component={Profile} />
      <Login path="/app/login" />
      <Signup path="/app/signup" />
      <Recover path="/app/recover" />
    </Router>
  </Layout>
)

export default App