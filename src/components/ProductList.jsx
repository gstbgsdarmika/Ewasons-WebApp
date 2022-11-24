import React from 'react';
import {
  Row, Col, Card, Button,
} from 'react-bootstrap';
import { products } from '../data/data-source';

function ProductList() {
  return (
    <div className="py-4">
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {products.map((product) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <div className="d-flex flex-row justify-content-between mb-3">
                  <div>
                    <Card.Text>{product.seller}</Card.Text>
                  </div>
                  <div>
                    <Card.Text>
                      Rp.
                      {product.price}
                    </Card.Text>
                  </div>
                </div>
                <div className="d-grid">
                  <Button variant="primary">Add to Cart</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProductList;
