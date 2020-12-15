import React from 'react'
import { FacebookLogo, InstagramLogo } from '../Assets'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 3px;
`
const Features = styled.div`
  margin: 10px;
`

const FeaturesItem = styled.a`
  color: black;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
`

const Copyrights = styled.p`
  margin: 7px 0px;
  font-size: 11px;
`

const Footer = () => {
  return (
    <section className="container-fluid" data-aos="fade-up">
      <div className="row clearfix pt-5 pb-5">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <center>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
              enim justo. Vestibulum aliquam
            </h5>

            <Link
              to="#"
              className="registerButton text-dark mt-4 mr-4 px-4 py-1"
            >
              Sign in
            </Link>
          </center>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <div className="row clearfix">
        <div className="col-lg-6  mt-5">
          <h1>
            Need help with
            <br />
            anything?
          </h1>
          <p>Jl. Paus dalam No. 37,Rawamangun,Pulo Gadung Indonesia,13220</p>
          <p>
            021-4721536
            <br />
            mastery.maximus@gmail.com
          </p>
        </div>
        <div className="col-lg-6 mt-4">
          <div className="row">
            <div className="col-md-4 mt-4">
              <h5>Why Mastery?</h5>
            </div>
            <div className="col-md-4 mt-4">
              <h5>Features</h5>
              <Features>
                <FeaturesItem href="#">Teamwork</FeaturesItem>
              </Features>
              <Features>
                <FeaturesItem href="#">Project Management</FeaturesItem>
              </Features>
              <Features>
                <FeaturesItem href="#">By Industries</FeaturesItem>
              </Features>
            </div>
            <div className="col-md-4 mt-4">
              <h5>Pricing</h5>
            </div>
          </div>
        </div>

        <div className="row clearfix container-fluid">
          <div className="col-lg-6">
            <Link to="#">          
              <Logo src={FacebookLogo.url} alt={FacebookLogo.alt} />
            </Link>
            <Link to="#">
              <Logo src={InstagramLogo.url} alt={InstagramLogo.alt} />
            </Link>
          </div>

          <div className="col-lg-6">
            <Copyrights>
              Copyright Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecebas varius tortor nibh. Maecenas varius tortor nibh ipsum
              dolor sit amet.
            </Copyrights>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
