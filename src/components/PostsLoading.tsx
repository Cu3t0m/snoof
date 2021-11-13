import { FunctionComponent } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PostsLoading: FunctionComponent = () => (
  <ListGroup>
    {Array.from({ length: 10 }, () => Math.random()).map((k) => {
      return (
        <ListGroupItem key={k} className="mb-3 p-3 rounded border">
          <h5 className="placeholder-glow">
            <span className="placeholder col-1 me-2"></span>
            <span className="placeholder col-5"></span>
          </h5>
          <p className="placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
        </ListGroupItem>
      );
    })}
  </ListGroup>
);

export default PostsLoading;
