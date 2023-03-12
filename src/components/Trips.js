import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Trips = () => {
  const data = useStaticQuery(graphql`
  query TripsQuery{
    allTripsJson{
      edges{
        node{
          alt
          button
          name
          img {
            childImageSharp{
              fluid{
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }`);

  function getTrips(data) {
    const tripsArray = []

    data.allTripsJson.edges.forEach((item,index) => {
      tripsArray.push(
        <div>
          <Img
            key={index}
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
          />
        </div>
      )
    })

    return tripsArray;
  }

  return (
      <ProductsContainer>
          <ProductsHeading>Heading</ProductsHeading>
      <ProductsWrapper>{getTrips(data)}</ProductsWrapper>
    </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vq - 1300px) /2);
    background: red;
    color: $fff;
`
const ProductsHeading = styled.div`
font-size: clamp(1.2rem, 5vw, 3rem);
text-algin: center;
margin-bottom: 5rem;
color: #000;
`
const ProductsWrapper = styled.div``
