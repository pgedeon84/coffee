import React from 'react';
import Product from "./Product";
import Title from '../globals/Title';
import { graphql, useStaticQuery } from 'gatsby';

export default function Products() {
  const data = useStaticQuery(graphql`
    {
      products: allContentfulCoffeeProduct {
        edges {
          node {
            id
            title
            price
            image {
              fluid(maxHeight: 426) {
                src
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }

  `)
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Products"/>
        <div className="row">
          {data.products.edges.map(({ node:product }) => {
            return <Product key={product.id} product={product} />
          })}
        </div>
      </div>
    </section>
  )
}
