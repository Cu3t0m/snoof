import { useState, useContext } from 'react';
import { Post, getTop } from '../api/reddit';
import { AuthContext } from '../hooks/useAuth';

function useTopPosts() {
  const authContext = useContext(AuthContext);
  const [afterId, setAfterId] = useState<string>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const load = (append: boolean = false, after?: string) => {
    if (authContext === undefined) return;

    const { data: auth, clearAuth } = authContext;

    if (auth?.access_token) {
      setLoading(true);
      getTop({ token: auth?.access_token, after })
        .then(({ posts: data, after }) => {
          if (append) {
            setPosts([...posts, ...data]);
          } else {
            setPosts(data);
          }

          setLoading(false);
          setAfterId(after);
        })
        .catch((e) => {
          if (e.status === 401) {
            clearAuth();
          }
          throw e;
        });
    }
  };

  const fetchPosts = () => load();

  const loadNextPage = () => load(true, afterId);

  const deletePost = (post: Post) => {
    const index = posts.findIndex((p) => p.data.name === post.data.name);
    const newPosts = [...posts];
    newPosts.splice(index, 1);
    setPosts(newPosts);
  };

  const clearPosts = () => {
    setPosts([]);
    setAfterId(undefined);
  };

  return { posts, fetchPosts, deletePost, clearPosts, loadNextPage, loading };
}

export default useTopPosts;
