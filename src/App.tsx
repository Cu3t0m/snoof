import { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import { getTop } from './api/reddit';
import './App.css';
import RedditLogo from './components/RedditLogo';
import RedditText from './components/RedditTextLogo';
import PostsList from './components/PostsList';
import PostDetails from './components/PostDetails';
import PostPlaceholder from './components/PostPlaceholder';
import { Post } from './api/reddit';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [openPost, setOpenPost] = useState<Post | undefined>();

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
            <PostsList posts={posts} onSelect={setOpenPost} />
          </Col>
          <Col md={7} className="post-details d-none d-md-block">
            {openPost ? <PostDetails post={openPost} /> : <PostPlaceholder />}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
