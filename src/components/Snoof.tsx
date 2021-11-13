import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Button,
  ButtonGroup,
} from 'reactstrap';
import { Post } from '../api/reddit';
import RedditLogo from '../components/RedditLogo';
import RedditText from '../components/RedditTextLogo';
import PostsList from '../components/PostsList';
import PostDetails from './PostDetails';
import PostPlaceholder from './PostDetails/Placeholder';
import PostsLoading from './PostsLoading';
import useUnread from '../hooks/useUnread';
import useTopPosts from '../hooks/useTopPosts';

const Snoof = () => {
  const { posts, fetchPosts, deletePost, clearPosts, loading } = useTopPosts();
  const { unread: isUnread, markAsRead } = useUnread();
  const [openPost, setOpenPost] = useState<Post | undefined>();

  useEffect(fetchPosts, []);

  const onOpenPost = (post: Post) => {
    setOpenPost(post);
    markAsRead(post);
  };

  return (
    <>
      <Navbar color="white" fixed="top" className="border-bottom">
        <NavbarBrand>
          <RedditLogo className="me-2" />
          <RedditText />
        </NavbarBrand>
        <ButtonGroup>
          <Button color="outline-secondary" onClick={clearPosts}>
            Clear Posts
          </Button>
          <Button color="outline-secondary" onClick={fetchPosts}>
            <i className="fas fa-redo-alt" />
          </Button>
        </ButtonGroup>
      </Navbar>
      <Container className="py-3 bg-light" fluid>
        <Row>
          <Col xs={12} md={5}>
            {loading ? (
              <PostsLoading />
            ) : (
              <PostsList
                isUnread={isUnread}
                posts={posts}
                onSelect={onOpenPost}
                onDelete={deletePost}
                active={openPost}
              />
            )}
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
