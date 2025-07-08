import React from 'react'
import Banner from './Banner'
import Slogen from './Slogen'
import Collaboration from './Collaboration'
import BuyDomain from './BuyDomain'
import TipsForWeb from './TipsForWeb'
import Footer from './Footer'
import NavbarNew from './NavbarNew'
import './Main.module.css'
import '../MainPage/Navbar.module.css'
import AIsection from './AIsection'
export  const MainPage = () => {
  return (
  <>
<NavbarNew/>
<Slogen/>
<Collaboration/>
<BuyDomain/>
<Banner />
<AIsection/>
<TipsForWeb/>
<Footer/>
    </>
  )
}
