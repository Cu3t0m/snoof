import { FunctionComponent } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PostHeader from './PostHeader';
import { Post } from '../api/reddit';
import { isValidUrl } from '../util';

interface PostsListProps {
  posts: Post[];
  active?: Post;
  onSelect: (post: Post) => void;
}

const PostsList: FunctionComponent<PostsListProps> = ({
  posts,
  active: activePost,
  onSelect,
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
          tag="button"
          action
          active={active}
          className="mb-3 rounded border"
          onClick={() => onSelect(post)}
        >
          <PostHeader active={active} post={post} />
          {thumbnail && isValidUrl(thumbnail) && (
            <img className="mb-2 rounded mx-auto d-block" src={thumbnail} />
          )}
          <div className="d-flex">
            <small className={`${active ? '' : 'text-muted'}`}>
              <i className="far fa-comment-alt me-1" />
              {`${numComments} `}Comments
            </small>
            <span className="ms-auto">
              <small className="fw-bold me-1">{score}</small>
              <i className="fas fa-sort text-warning" />
            </span>
          </div>
        </ListGroupItem>
      );
    })}
  </ListGroup>
);

export default PostsList;
