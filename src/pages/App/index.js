import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { BackgroundImage, BackgroundFooter } from '../../parts/Assets'
import Footer from '../../parts/Footer'
import Header from '../../parts/Header'
import Navbar from '../../parts/Navbar'
import ContentOne from '../../parts/ContentOne'
import ContentTwo from '../../parts/ContentTwo'
import Article from '../../parts/Article'

const Head = styled.section`
  margin-top: -90px;
  padding-top: 100px;
  padding-bottom:0px;
  background-image: url("${BackgroundImage.url}");
  background-repeat: no-repeat;
  background-size: 100% 105%;
  font-family: Poppins Bold;

   @media screen and (max-width: 420px) {
     background-image: none;
     h1 {
       font-size: 30px;
     }
   }
`

const Foot = styled.section`
  background-image: url("${BackgroundFooter.url}");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: Poppins Bold;
  padding-bottom:45px;
  padding-top:45px;

  @media screen and (max-width: 420px){
    background-image: none;
  }
`
// aos-init aos-animate
const App = () => {
  React.useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      duration: 3000,
      useClassNames: true,
      animatedClassName: 'aos-animate',
      debounceDelay: 50,
      throttleDelay: 99,
      delay: 500,
      anchorPlacement: 'top-bottom',
      once: false,
    })
    AOS.refresh()
  })

  return (
    <Router>
      <Navbar />
      {/* header */}
      <Head className="container">
        <Header />
      </Head>
      {/* koten */}
      <ContentOne />
      <ContentTwo />
      {/* footer */}
      <Article />
      <Foot className="container-fluid">
        <Footer />
      </Foot>
    </Router>
  )
}

export default App
