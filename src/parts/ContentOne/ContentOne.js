import React, { useState } from 'react'
import styled from 'styled-components'

import CardNumber from '../CardNumber'
import { UseCaseImages } from '../Assets'

const Content = styled.section`
  margin-top: 50px;
  font-size: 18px;
  p.main {
    font-family: Poppins Regular;
  }
`

const ContentOne = () => {
  const [content] = useState([
    {
      number: '1',
      title:
        'Maecenas varius tortor nibh sit amet tempor nibh finibus et Aenean eu enim justo',
      subtitle:
        'Maecenas varius tortor nibh sit amet tempor nibh finibus et Aenean eu enim',
    },
    {
      number: '2',
      title: 'Maecenas varius tortor sit amet tempor nibh fin et Aenan.',
      subtitle: 'Maecenas varius tortor nibh nibh finibus et',
    },
    {
      number: '3',
      title:
        'Maecenas varius tortor nibh sit amet tempor nibh finibus et Aenean eu enim justo',
      subtitle:
        'Maecenas varius tortor nibh sit amet tempor nibh finibus et Aenean eu enim',
    },
  ])

  return (
    <Content className="container" data-aos="fade-up">
      <div className="row clearfix" data-aos="fade-up">
        <div className="col-lg-12">
          <h3>Feature</h3>
          <p className="main">
            Maecenas varius tortor nibh, sit amet tempor <br />
            nibh finibus et, Aenean eu enim justo Vesribulum
          </p>
        </div>
        {content.map((cont, index) => (
          <div className="col-lg-4" key={index} data-aos="fade-up">
            <CardNumber
              number={cont.number}
              title={cont.title}
              subtitle={cont.title}
            />
          </div>
        ))}
        <div className="col-lg-12" data-aos="fade-up">
          <h3 className="text-center">Use Case</h3>
        </div>
        <div className="col-lg-6" data-aos="fade-up">
          <img src={UseCaseImages.url} alt={UseCaseImages.alt} />
        </div>
        <div className="col-lg-6" data-aos="fade-up">
          <div className="py-auto my-auto">
            <CardNumber
              title="Lorem ipsum dolor sit amet consectetur adipiscing elit Maecenas varius tortor nibh"
              subtitle="sit amet tempor nibh finibus et. Aenean eu enim justo vestibulum aliquam hendrerit moletie. Mauris malesuada nisi sit amet augue accusan tinicidunt"
            />
            <br />
            <CardNumber
              title="Lorem ipsum dolor sit amet consetetur adipiscing elit Maecenas"
              subtitle="sit amet tempor nibh finibus et. Aenean eu enim justo vestibulum aliquam hendrerit moletie."
            />
          </div>
        </div>
      </div>
    </Content>
  )
}

export default ContentOne
