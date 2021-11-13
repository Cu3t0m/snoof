import { FunctionComponent } from 'react';
import { formatDistance, fromUnixTime } from 'date-fns';
import RedditLogo from './RedditLogo';
import { Post } from '../api/reddit';

interface PostHeaderProps {
  post: Post;
  active?: boolean;
}

const PostHeader: FunctionComponent<PostHeaderProps> = ({
  active,
  post: {
    data: { author, title, subreddit, created_utc: createdAt },
  },
}) => (
  <>
    <RedditLogo width={16} height={16} className="me-2" />
    <small className="fw-bold">r/{subreddit}</small>
    <small className={`${active ? '' : 'text-muted'}`}>
      {' • '}Posted by
      {` u/${author} ${formatDistance(fromUnixTime(createdAt), new Date(), {
        addSuffix: true,
      })}`}
    </small>
    <div className="my-2">{title}</div>
  </>
);

export default PostHeader;
