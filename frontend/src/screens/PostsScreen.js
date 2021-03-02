import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

import Rating from "../components/Rating";
import axios from "axios";

const PostsScreen = ({ blogPost }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("/api/posts");

      setPosts(data);
    };

    fetchPosts();
  }, [blogPost]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={posts.image} alt={blogPost.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{blogPost.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={blogPost.rating}
                text={`${blogPost.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${blogPost.price}</ListGroup.Item>
            <ListGroup.Item>Description: {blogPost.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                Price
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${blogPost.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {blogPost.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={blogPost.countInStock === 0}
                >
                  Add to cart <i className="fas fa-shopping-cart" />
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PostsScreen;
