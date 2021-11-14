import { FunctionComponent } from 'react';
import { Button } from 'reactstrap';
import { formatDistance, fromUnixTime } from 'date-fns';
import RedditLogo from './RedditLogo';
import { Post } from '../api/reddit';

interface PostHeaderProps {
  post: Post;
  active?: boolean;
  unread?: boolean;
}

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  active,
  unread,
  post: {
    data: { author, title, subreddit, created_utc: createdAt },
  },
}) => (
  <>
    <div>
      <RedditLogo width={16} height={16} className="me-2" />
      <small className="fw-bold">r/{subreddit}</small>
      <small className={`${active ? '' : 'text-muted'}`}>
        {' • '}Posted by
        {` u/${author} ${formatDistance(fromUnixTime(createdAt), new Date(), {
          addSuffix: true,
        })}`}
      </small>
      {unread && (
        <small data-testid="unread-indicator" className="p-0 ms-2 text-primary">
          <i className="fas fa-circle" />
        </small>
      )}
    </div>
    <div className="my-2">{title}</div>
  </>
);

export default PostHeader;
