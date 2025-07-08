import React from 'react'
import './Design.module.css'
import DesignTemplate from './DesignTemplate'
import ExploreDesign from './ExploreDesign'
import JoinPlatorm from './JoinPlatorm'
import Footer from '../MainPage/Footer'
import NavbarNew from '../MainPage/NavbarNew'
export const DesignMain = () => {
  return (
    <>
       <NavbarNew/>
       <DesignTemplate/>
       <ExploreDesign/>
       <JoinPlatorm/>
      <Footer/>
    </>
  )
}
