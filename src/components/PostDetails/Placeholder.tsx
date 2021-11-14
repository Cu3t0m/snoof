import { FunctionComponent } from 'react';
import { Card, CardBody } from 'reactstrap';

const PostDetailsPlaceholder: FunctionComponent = () => {
  return (
    <Card style={{ height: window.innerHeight - 90 }} data-testid="post-placeholder">
      <CardBody>
        <div className="d-flex align-items-center h-100">
          <div className="d-block mx-auto">
            <img src="https://www.redditstatic.com/reddit404d.png" />
            <div className="text-center">"Please select a post." - Snoo</div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PostDetailsPlaceholder;
