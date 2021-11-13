import { useLocalStorage } from 'react-use';
import { Post } from '../api/reddit';

function useUnread() {
  const [read, setRead] = useLocalStorage<string[]>('snoof-read-ids', []);

  const unread = (post: Post) => {
    return !read?.includes(post.data.name);
  }

  const markAsRead = (post: Post) => {
    setRead([...(read || []), post.data.name]);
  }

  return [unread, markAsRead];
}

export default useUnread;
