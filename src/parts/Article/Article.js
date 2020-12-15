import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ArticleOne, ArticleTwo, ArticleThree, ArrowArticle } from '../Assets'

const Card = styled.div`
  background-color: white;
  width: 250px;
  margin: 15px 15px;
  outline: none;
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  font-family: Poppins Bold;
  font-weight: 200;
`

const Date = styled.div`
  background-color: #8f6604;
  color: #fff;
  font-size: 12px;
  position: absolute;
  top: 120px;
  right: 30px;
  width: 55px;
  height: 80px;
  padding: 23px 5px 0 5px;
  align-items: baseline;
  border-radius: 5px;
  font-family: poppins bold;
  text-align: center;
`

const Title = styled.h1`
  color: #f5ac00;
  text-align: center;
  margin: 100px 0 80px 0;
`
const NextArrow = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 0 100px 0;
  font-weight: 200;

  a {
    color: black;
  }

  a:hover {
    color: blue;
  }

  img {
    height: 14px;
    opacity: 0.7;
    padding-left: 10px;
    width: 5rem;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Article = () => {
  return (
    <section className="container-fluid" data-aos="fade-up">
      <div className="row clearfix pt-5 pb-5 d-flex justify-content-center">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <Title>Latest Articles</Title>

          <FlexContainer data-aos="fade-up">
            <Link to="#">
              <Card className="card">
                <img
                  className="card-img-top"
                  style={{ marginBottom: 40 }}
                  src={ArticleOne.url}
                  alt={ArticleOne.alt}
                />

                <div className="card-body">
                  <h5>Lorem Ipsum</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <Date>
                  <h5>
                    16
                    <br />
                    APR
                  </h5>
                </Date>
              </Card>
            </Link>

            <Link to="#">
              <Card className="card">
                <img
                  className="card-img-top"
                  style={{ marginBottom: 40 }}
                  src={ArticleTwo.url}
                  alt={ArticleTwo.alt}
                />

                <div className="card-body">
                  <h5>Lorem Ipsum</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <Date>
                  <h5>
                    16
                    <br />
                    APR
                  </h5>
                </Date>
              </Card>
            </Link>

            <Link to="#">
              <Card className="card">
                <img
                  className="card-img-top"
                  style={{ marginBottom: 40 }}
                  src={ArticleThree.url}
                  alt={ArticleThree.alt}
                />

                <div className="card-body">
                  <h5>Lorem Ipsum</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <Date>
                  <h5>
                    16
                    <br />
                    APR
                  </h5>
                </Date>
              </Card>
            </Link>

            <Link to="#"></Link>
          </FlexContainer>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <NextArrow className="row">
        <Link to="#">
          read more
          <img src={ArrowArticle.url} alt={ArrowArticle.alt} />
        </Link>
      </NextArrow>
    </section>
  )
}

export default Article
