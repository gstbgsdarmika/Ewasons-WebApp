import React from 'react';
import { Button, Form } from 'react-bootstrap';

function SearchBar() {
  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="primary">Search</Button>
      </Form>
    </div>
  );
}

export default SearchBar;
