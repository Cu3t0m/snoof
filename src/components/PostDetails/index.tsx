import { FunctionComponent } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Post } from '../../api/reddit';
import PostHeader from '../PostHeader';
import Content from './Content';

interface PostDetailsProps {
  post: Post;
}

const PostDetails: FunctionComponent<PostDetailsProps> = ({ post }) => {
  const {
    data: { title },
  } = post;

  return (
    <Card style={{ height: window.innerHeight - 90 }}>
      <CardHeader className="bg-white border-bottom-0">
        <PostHeader post={post} />
      </CardHeader>
      <CardBody className="overflow-auto">
        <Content post={post} />
      </CardBody>
    </Card>
  );
};

export default PostDetails;
