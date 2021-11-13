import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import { AuthContext } from '../hooks/useAuth';
import { getTop, Post } from '../api/reddit';
import RedditLogo from '../components/RedditLogo';
import RedditText from '../components/RedditTextLogo';
import PostsList from '../components/PostsList';
import PostDetails from './PostDetails';
import PostPlaceholder from '../components/PostPlaceholder';

const Snoof = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [openPost, setOpenPost] = useState<Post | undefined>();
  const auth = useContext(AuthContext);

  useEffect(() => {
    if (auth?.access_token) {
      getTop({ token: auth?.access_token }).then((data) => {
        console.log(data);
        setPosts(data);
      });
    }
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
            <PostsList posts={posts} onSelect={setOpenPost} active={openPost} />
          </Col>
          <Col md={7} className="post-details d-none d-md-block">
            {openPost ? <PostDetails post={openPost} /> : <PostPlaceholder />}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Snoof;
