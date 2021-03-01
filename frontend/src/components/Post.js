import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

import "../css/Post.css";

const Post = ({ blogPost }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/posts/${blogPost._id}`}>
        <Card.Img src={blogPost.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/posts/${blogPost._id}`}>
          <Card.Title as="h6">
            <strong>{blogPost.title}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="p">
          <div className="my-3">Category: {blogPost.category}</div>
        </Card.Text>

        <Card.Text as="p">
          <div className="my-3">{blogPost.description}</div>
        </Card.Text>

        <Card.Text as="p">
          <div className="my-3">Total comments: {blogPost.numComments}</div>
        </Card.Text>

        <Card.Text as="p">
          <Rating
            value={blogPost.rating}
            text={` out of ${blogPost.numReviews} reviews`}
          />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Post;
