import React, { Component } from 'react';
import Title from '../globals/Title';
import Img from 'gatsby-image';

const getCategories = items => {
  let tempItems = items.map( (item) => {
    return item.node.category
  })
  let tempCategories = new Set (tempItems);
  let categories = Array.from(tempCategories)
  categories = ["All", ...categories]
    return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges)
    }
  }

  handleItems = (category) => {
   let tempItems = [...this.state.items]
    if(category === 'All'){
      {this.setState(()=> {
        return {coffeeItems: tempItems}
      })}
    } else {
    let item = tempItems.filter(({ node }) =>
      category === node.category
      );
    this.setState(() => {
      return {coffeeItems: item}
    })
    }
  }
  render() {
    if(this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="our menu"/>
          {/* categories */}
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {this.state.categories.map((category, index) => {
                return (
                  <button
                    type="button"
                    key={index}
                    className="btn btn-yellow text-capitalize m-3"
                    onClick={()=> {this.handleItems(category)}}
                    >
                    {category}
                  </button>
                )
              })}
            </div>
          </div>
            {/* items */}
          </div>
          <div className="row">
            {this.state.coffeeItems.map(({ node }) => {
              return (
                <div key={node.id} className="col-10 col-md-5 my-3 d-flex mx-auto">
                  <div>
                    <Img fixed={node.image.fixed} />
                  </div>
                  <div className="flex-grow-1 px-3">
                    <div className="d-flex justify-content-between">
                      <h6 className="mb-0">
                        <small>{node.title}</small>
                      </h6>
                      <h6 className="mb-0 text-yellow">
                        <small>${node.price}</small>
                      </h6>
                    </div>
                    <p className="text-muted">
                      <small className="mx-auto">
                        {node.description.description}
                      </small>
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
         </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu"/>
          </div>
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <h1>there are no items to display</h1>
            </div>
          </div>
         </section>
      )
    }
  }
}
