import React, { FunctionComponent } from 'react';
import { Card, CardBody, CardHeader } from 'reactstrap';
import { Post } from '../../api/reddit';
import PostHeader from '../PostHeader';
import Content from './Content';

interface PostDetailsProps extends React.InputHTMLAttributes<HTMLInputElement>  {
  post: Post;
}

const PostDetails: FunctionComponent<PostDetailsProps> = ({ post, ...props }) => {
  const {
    data: { title },
  } = post;

  return (
    <Card style={{ height: window.innerHeight - 90 }} {...props}>
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
