import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listProducts } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const { loading, error, products } = productsList;

  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
