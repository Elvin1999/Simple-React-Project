import React, { Component } from "react";
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container, Row, Col } from 'reactstrap';
export default class App extends Component {
  state={currentCategory:""};
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
  };
  render(){
   let productInfo={title:"Product List"};
   let categoryInfo={title:"Category List"};
  return (
    <div>
      <Container>
        <Row>

     <Navi></Navi>
        </Row>
        <Row>
          <Col xs="3">
          
     <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} title={categoryInfo.title} ></CategoryList>
          </Col>
          <Col xs="9">
     <ProductList currentCategory={this.state.currentCategory} title={productInfo.title}></ProductList>
          </Col>

        </Row>
      </Container>
    </div>
  );

}

}
