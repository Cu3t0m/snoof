import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Navbar, NavbarBrand, Button, ButtonGroup } from 'reactstrap';
import { AuthContext } from '../hooks/useAuth';
import { getTop, Post } from '../api/reddit';
import RedditLogo from '../components/RedditLogo';
import RedditText from '../components/RedditTextLogo';
import PostsList from '../components/PostsList';
import PostDetails from './PostDetails';
import PostPlaceholder from '../components/PostPlaceholder';
import useUnread from '../hooks/useUnread';

const Snoof = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [openPost, setOpenPost] = useState<Post | undefined>();
  const auth = useContext(AuthContext);
  const { unread: isUnread, markAsRead } = useUnread();

  const fetchPosts = () => {
    if (auth?.access_token) {
      getTop({ token: auth?.access_token }).then((data) => {
        console.log(data);
        setPosts(data);
      });
    }
  }
  useEffect(fetchPosts, []);

  const onOpenPost = (post: Post) => {
    setOpenPost(post);
    markAsRead(post);
  };

  const deletePost = (post: Post) => {
    const index = posts.findIndex((p) => p.data.name === post.data.name);
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  return (
    <>
      <Navbar color="white" fixed="top" className="border-bottom">
        <NavbarBrand>
          <RedditLogo className="me-2" />
          <RedditText />
        </NavbarBrand>
        <ButtonGroup>
          <Button color="outline-secondary" onClick={() => setPosts([])}>Clear Posts</Button>
          <Button color="outline-secondary" onClick={fetchPosts}><i className="fas fa-redo-alt" /></Button>
        </ButtonGroup>
      </Navbar>
      <Container className="py-3 bg-light" fluid>
        <Row>
          <Col xs={12} md={5}>
            <PostsList
              isUnread={isUnread}
              posts={posts}
              onSelect={onOpenPost}
              onDelete={deletePost}
              active={openPost}
            />
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
