import { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalHeader
} from 'reactstrap';
import { useMediaQuery } from '@react-hook/media-query';
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
  const { posts, fetchPosts, deletePost, clearPosts, loadNextPage, loading } =
    useTopPosts();
  const { unread: isUnread, markAsRead } = useUnread();
  const [openPost, setOpenPost] = useState<Post | undefined>();
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

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
            {loading && posts.length === 0 ? (
              <PostsLoading />
            ) : posts.length > 0 ? (
              <PostsList
                isUnread={isUnread}
                posts={posts}
                onSelect={onOpenPost}
                onDelete={deletePost}
                onLoadMore={loadNextPage}
                active={openPost}
                loading={loading}
              />
            ) : (
              'Nothing to see here...'
            )}
          </Col>
          <Col md={7} className="post-details d-none d-md-block">
            {openPost ? <PostDetails post={openPost} /> : <PostPlaceholder />}
          </Col>
          { openPost &&
            <Modal fullscreen isOpen={isSmallScreen}>
              <ModalHeader toggle={() => setOpenPost(undefined)} />
              <ModalBody>
                <PostDetails post={openPost} className="border-0" />
              </ModalBody>
            </Modal>
          }
        </Row>
      </Container>
    </>
  );
};

export default Snoof;
