import sample from './sample-data';
const redditAPI = 'http://www.reddit.com/dev/api';

export interface Post {
  kind: string;
  data: {
    author: string;
    created_utc: number;
    num_comments: number;
    score: number;
    subreddit: string;
    thumbnail?: string;
    title: string;
  };
}

export const getTop = (): Post[] => {
  return sample.data.children;
};
