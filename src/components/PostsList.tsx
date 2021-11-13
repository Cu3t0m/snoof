import { FunctionComponent } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { formatDistance, fromUnixTime } from 'date-fns';
import RedditLogo from './RedditLogo';
import { Post } from '../api/reddit';

interface PostsListProps {
  posts: Post[];
  onSelect: (post: Post) => void;
}

const PostsList: FunctionComponent<PostsListProps> = ({ posts, onSelect }) => (
  <ListGroup>
    {posts.map((post) => {
      const {
        data: {
          title,
          subreddit,
          author,
          score,
          num_comments: numComments,
          created_utc: createdAt,
          thumbnail,
          name,
        },
      } = post;

      return (
        <ListGroupItem
          key={name}
          tag="button"
          action
          className="mb-3 rounded border"
          onClick={() => onSelect(post)}
        >
          <RedditLogo width={16} height={16} className="me-2" />
          <small className="fw-bold">r/{subreddit}</small>
          <small className="text-muted">
            {' • '}Posted by
            {` u/${author} ${formatDistance(
              fromUnixTime(createdAt),
              new Date(),
              { addSuffix: true }
            )}`}
          </small>
          <div className="my-2">{title}</div>
          {thumbnail && (
            <img className="mb-2 rounded mx-auto d-block" src={thumbnail} />
          )}
          <div className="d-flex">
            <small className="text-muted">
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
