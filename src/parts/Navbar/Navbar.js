/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { LogoImage } from '../Assets'

const NavHeader = styled.nav`
  font-family: Poppins Bold;
  font-size: 18px;
  position: relative;
  box-shadow: none;
  .navbar-brand {
    border-bottom: none;
  }
`

const Navbar = () => {
  return (
    <section className="container" data-aos="fade-in">
      <NavHeader className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={LogoImage.url}
              alt={LogoImage.alt}
              width="auto"
              height="auto"
              className="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="zmdi zmdi-hc-fw"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-3 mt-lg-0"></ul>
            <div className="form-inline my-2 my-lg-0">
              <ul className="navbar-nav mr-auto mt-2">
                <>
                  <li>
                    <Link to="#" className="px-4 py-2 text-dark">
                      Why Mastery
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="px-4 py-2 text-dark">
                      Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#" className="px-4 py-2 text-dark">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="registerButton text-dark mr-4 px-4 py-1"
                    >
                      Sign in
                    </Link>
                  </li>
                </>
              </ul>
            </div>
          </div>
        </div>
      </NavHeader>
    </section>
  )
}

export default Navbar
