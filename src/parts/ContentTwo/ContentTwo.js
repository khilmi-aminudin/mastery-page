import React from 'react'
import styled from 'styled-components'
import CardSlider from '../CardSlider'

const Content = styled.section`
  font-family: 'Poppins Regular';
  margin-top: 100px;
`

const ContentTwo = () => {
  return (
    <Content className="container" data-aos="fade-up">
      <div className="row clearfix" data-aos="fade-up">
        <div className="col-lg-12">
          <h3>
            What's people say <br />
            about us
          </h3>
          <p className="main">
            Maecenas varius tortor nibh, sit amet tempor <br />
            nibh finibus et, Aenean eu enim justo Vesribulum
          </p>
        </div>
        <div className="col-lg-12">
          <CardSlider />
        </div>
      </div>
    </Content>
  )
}

export default ContentTwo
