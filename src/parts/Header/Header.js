import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from '../Assets'

const Header = () => {
  return (
    <section className="container-fluid" data-aos="fade-out">
      <div className="row clearfix">
        <div className="col-lg-6">
          <div className="ml-3 p-y-auto">
            <h1>Lorem ipsum dolor sit amet consectetur adipsing</h1>
            <p>
              Relit Maecenas varius tortor nibh, sit amet tempor <br />
              nibh finibus et. Aenean eu enim justo. Vestibulum <br />
              aliquam hendrerit molestie. Mauris malesuada nisi <br />
              sit amet augue accumsan tincidunt.
            </p>
            <Link
              to="#"
              className="registerButton text-dark mt-4 mr-4 px-4 py-1"
            >
              Sign in
            </Link>
          </div>
        </div>
        <div className="col-lg-6">
          <img src={Banner.url} alt={Banner.alt} />
        </div>
      </div>
    </section>
  )
}

export default Header
