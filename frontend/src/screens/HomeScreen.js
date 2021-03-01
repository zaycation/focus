import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Post from "../components/Post";
import axios from "axios";
import Typing from "react-typing-animation";
import "../css/HomeScreen.css";

const AnimatedTypingComponent = () => (
  <Typing startDelay={50} speed={100}>
    <h1 className="heading__text">Start Your Financial Wealth Journey Today</h1>
  </Typing>
);

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get("/api/posts");

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="hero__section">
        <Row>
          <Col sm={12} md={12} className="hero__img">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <AnimatedTypingComponent />
            <br />
            <br />
            <div className="center__btns">
              <Button size="lg" variant="dark">
                Free Financial Literacy Course
              </Button>{" "}
              <Button size="lg" variant="dark">
                Try Budgeting Today (100% Free!)
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <br />
        <br />
        <h2>Latest Blog Posts</h2>
        <br />
        <Row>
          {posts.map((blogPost) => (
            <Col key={blogPost._id} sm={12} md={6} lg={4} xl={3}>
              <Post blogPost={blogPost} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomeScreen;
