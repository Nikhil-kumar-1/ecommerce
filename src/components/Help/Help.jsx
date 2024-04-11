// import React from 'react'

// const Help = () => {
//   return (
//     <div>H</div>
//   )
// }

// export default Help;

import React, { useState } from 'react';
import { Container, Form, Button, Col, Row, Alert, ListGroup } from 'react-bootstrap';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      if (!recentSearches.includes(searchQuery)) {
      setRecentSearches(prevSearches => [searchQuery, ...prevSearches]);}
    }
  };

  return (
    <Container>
      <Row className="justify-content-center" style={{border: "5px solid #64824f", margin:"0px !important", backgroundColor:"#CBC3E3", padding:"30px"}}>
        <Col xs={12} md={6}>
          <h2 className="text-center mt-4 mb-4">Search</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="searchQuery">
              <Form.Label>Search for Food</Form.Label>
              <Form.Control
                type="text"
                value={searchQuery}
                onChange={handleChange}
                placeholder="Search for food items..."
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
          <hr />
          <h3 className="mt-4 mb-3">Recent Searches</h3>
          <ListGroup>
            {recentSearches.map((search, index) => (
              <ListGroup.Item key={index}>{search}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Help;
