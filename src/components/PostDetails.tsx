import { FunctionComponent } from 'react';
import { Card, CardBody } from 'reactstrap';
import { formatDistance, fromUnixTime } from 'date-fns';
import RedditLogo from './RedditLogo';
import { Post } from '../api/reddit';

interface PostDetailsProps {
  post: Post;
}

const PostDetails: FunctionComponent<PostDetailsProps> = ({ post }) => {
  const {
    data: { title },
  } = post;

  return (
    <Card style={{ height: window.innerHeight - 90 }}>
      <CardBody>{title}</CardBody>
    </Card>
  );
};

export default PostDetails;
