import React, { Component } from 'react'
import MyNav from './Components/Navbarra/MyNav'
import { myLinks, myLinksFoot } from './data/navlinks'
import MyFooter from './Components/Footbarra/MyFooter'
import Welcome from './Components/Benvenuto/Welcome'
import LatestRelease from './Components/Main/LatestRelease'
export class App extends Component {
  render() {
    return (
      <>
      <MyNav links={myLinks}/>
      <Welcome/>
      <LatestRelease/>
      <MyFooter links={myLinksFoot}/>
      </>
    )
  }
}

export default App

