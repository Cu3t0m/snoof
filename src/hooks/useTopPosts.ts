import { useState, useContext } from 'react';
import { Post, getTop } from '../api/reddit';
import { AuthContext } from '../hooks/useAuth';

function useTopPosts() {
  const authContext = useContext(AuthContext);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPosts = () => {
    if (authContext === undefined) return;

    const { data: auth, clearAuth } = authContext;

    if (auth?.access_token) {
      setLoading(true);
      getTop({ token: auth?.access_token }).then((data) => {
        setPosts(data);
        setLoading(false);
      }).catch((e) => {
        if (e.status === 401) {
          clearAuth();
        }
        throw e;
      });
    }
  };

  const deletePost = (post: Post) => {
    const index = posts.findIndex((p) => p.data.name === post.data.name);
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  const clearPosts = () => {
    setPosts([]);
  };

  return { posts, fetchPosts, deletePost, clearPosts, loading };
}

export default useTopPosts;
