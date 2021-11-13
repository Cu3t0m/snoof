import { FunctionComponent } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import PostHeader from './PostHeader';
import { Post } from '../api/reddit';
import { isValidUrl } from '../util';

interface PostsListProps {
  posts: Post[];
  active?: Post;
  loading?: boolean;
  onSelect: (post: Post) => void;
  onDelete: (post: Post) => void;
  isUnread: (post: Post) => boolean;
  onLoadMore: () => void;
}

const PostsList: FunctionComponent<PostsListProps> = ({
  posts,
  active: activePost,
  onSelect,
  onDelete,
  onLoadMore,
  isUnread,
  loading,
}) => (
  <ListGroup>
    {posts.map((post) => {
      const {
        data: { score, num_comments: numComments, thumbnail, name },
      } = post;

      const active = activePost?.data.name === name;

      return (
        <ListGroupItem
          key={name}
          action
          active={active}
          className="mb-3 p-3 rounded border"
          onClick={() => onSelect(post)}
        >
          <PostHeader unread={isUnread(post)} active={active} post={post} />
          {thumbnail && isValidUrl(thumbnail) && (
            <img className="mb-2 rounded mx-auto d-block" src={thumbnail} />
          )}
          <div className="d-flex mb-2">
            <small className={`${active ? '' : 'text-muted'}`}>
              <i className="far fa-comment-alt me-1" />
              {`${numComments} `}Comments
            </small>
            <span className="ms-auto">
              <small className="fw-bold me-1">{score}</small>
              <i className="fas fa-sort text-warning" />
            </span>
          </div>
          <Button
            color={active ? 'outline-light' : 'outline-danger'}
            size="sm"
            className="float-end"
            onClick={(ev) => {
              ev.stopPropagation();
              onDelete(post);
            }}
          >
            Delete
          </Button>
        </ListGroupItem>
      );
    })}
    <ListGroupItem
      tag="button"
      color="primary"
      key="load-more"
      action
      className="mb-3 p-3 rounded border text-center"
      onClick={onLoadMore}
    >
      Load More {loading && <i className="fas fa-spinner ms-2 fa-spin" />}
    </ListGroupItem>
  </ListGroup>
);

export default PostsList;
