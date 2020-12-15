import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { PrevButton, NextButton } from '../Assets'

import UserOne from '../Assets/img/useone.png'
import UserTwo from '../Assets/img/usertwo.png'
import UserThree from '../Assets/img/userthree.png'
import UserFour from '../Assets/img/userfour.png'

const Card = styled.div`
  p {
    font-size: 20px;
    margin-top: 15px;
    float: left;
  }
  .card {
    padding-top: 25px;
    padding-bottom: 25px;
    border: solid var(--main-yellow-color);
    border-width: thin;
  }

  .card:focus,
  .active {
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 10px;
    background-color: var(--main-yellow-color);
    box-shadow: 2px 3px 7px grey;
  }

  .card:hover {
    background-color: var(--main-yellow-color);
  }
  @media screen and (max-width: 420px) {
    p.title {
      margin-top: 20px;
      margin-left: 100px;
    }
    img,
    p {
      display: inline;
      margin: auto;
    }

    img {
      width: 100px;
      height: auto;
    }
  }
`

const Img = styled.div`
  @media screen and (max-width: 420px) {
    img.panah {
      display: none !important;
    }
  }
`

const CardSlider = () => {
  const [dataCard] = React.useState([
    {
      id: 1,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserOne,
      className: 'card mcard_3',
    },
    {
      id: 2,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserTwo,
      className: 'card mcard_3',
    },
    {
      id: 3,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserThree,
      className: 'card mcard_3',
    },
    {
      id: 4,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserFour,
      className: 'card mcard_3',
    },
    {
      id: 5,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserFour,
      className: 'card mcard_3',
    },
    {
      id: 6,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserOne,
      className: 'card mcard_3',
    },
    {
      id: 7,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserTwo,
      className: 'card mcard_3',
    },
    {
      id: 8,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserThree,
      className: 'card mcard_3',
    },
    {
      id: 9,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserFour,
      className: 'card mcard_3',
    },
    {
      id: 10,
      title: 'lorem ipsum',
      subtitle: 'dolor sit amet',
      content:
        'consectetur adipiscing elit. consectetur adi piscing elit Maecenas varius adipiscing elit',
      img: UserOne,
      className: 'card mcard_3',
    },
  ])

  const renderSlides = () =>
    dataCard.map((data, index) => (
      <Card key={index} className="pl-2 pr-2">
        <div className={data.className} tabIndex={data.id}>
          <div className="row clearfix">
            <div className="col-md-4">
              <img
                src={data.img}
                alt="img"
                className="rounded-circle shadow ml-3 mt-3"
              />
            </div>
            <div className="col-md-8">
              <p className="title">
                <strong>{data.title}</strong>
                <br />
                {data.subtitle}
              </p>
            </div>
            <div className="col-md-12">
              <p>"{data.content}"</p>
            </div>
          </div>
        </div>
      </Card>
    ))

  const PrevArrow = ({ onClick }) => {
    return (
      <Img className="d-flex justify-content-end inline">
        <img
          style={{
            width: 'auto',
            height: '20px',
            position: 'relative',
            marginRight: '200px',
            marginBottom: '40px',
          }}
          src={PrevButton.url}
          alt={PrevButton.alt}
          onClick={onClick}
          className="panah"
        />
      </Img>
    )
  }

  const NextArrow = ({ onClick }) => {
    return (
      <Img className="d-flex justify-content-end inline">
        <img
          style={{
            position: 'relative',
            marginTop: '-402px',
            width: 'auto',
            height: '20px',
          }}
          src={NextButton.url}
          alt={NextButton.alt}
          onClick={onClick}
          className="panah"
        />
      </Img>
    )
  }

  return (
    <>
      <Slider
        nextArrow={<NextArrow />}
        prevArrow={<PrevArrow />}
        dots={false}
        slidesToShow={4}
        slidesToScroll={3}
        autoplay={false}
        autoplaySpeed={3000}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
        ]}
      >
        {renderSlides()}
      </Slider>
    </>
  )
}

export default CardSlider
