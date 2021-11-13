import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Card,
  CardBody,
} from 'reactstrap';
import { getTop } from './api/reddit';
import './App.css';
import RedditLogo from './components/RedditLogo';
import RedditText from './components/RedditTextLogo';
import PostsList, { Post } from './components/PostsList';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    setPosts(getTop());
  }, []);

  return (
    <>
      <Navbar color="white" fixed="top" className="border-bottom">
        <NavbarBrand>
          <RedditLogo className="me-2" />
          <RedditText />
        </NavbarBrand>
      </Navbar>
      <Container className="py-3 bg-light" fluid>
        <Row>
          <Col xs={12} md={5}>
            <PostsList posts={posts} />
          </Col>
          <Col md={7} className="post-details d-none d-md-block">
            <Card style={{ height: window.innerHeight - 90 }}>
              <CardBody>henlo! i am placholdr :)</CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
