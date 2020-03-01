//import "./src/styles/global.css"
require('./src/styles/global.css')

exports.onClientEntry = () => {
    console.log("We've started!")
}

exports.onRouteUpdate = ({ location, prevLocation }) => {
    console.log('new pathname', location.pathname)
    console.log('old pathname', prevLocation ? prevLocation.pathname : null)
  }