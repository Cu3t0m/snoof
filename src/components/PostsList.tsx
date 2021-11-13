import { FunctionComponent } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import RedditLogo from './RedditLogo';

export interface Post {
  data: {
    author: string;
    num_comments: number;
    score: number;
    subreddit: string;
    title: string;
  };
}

interface PostsListProps {
  posts: Post[];
}

const PostsList: FunctionComponent<PostsListProps> = ({ posts }) => (
  <ListGroup>
    {posts.map(
      ({
        data: { title, subreddit, author, score, num_comments: numComments },
      }) => (
        <ListGroupItem tag="button" action className="mb-3 rounded border">
          <RedditLogo width={16} height={16} className="me-2" />
          <small className="fw-bold">r/{subreddit}</small>
          <small className="text-muted">
            {' • '}Posted by{` u/${author}`}
          </small>
          <div className="my-2">{title}</div>
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
      )
    )}
  </ListGroup>
);

export default PostsList;
