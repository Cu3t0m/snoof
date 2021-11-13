import sample from './sample-data';
const redditAPI = 'http://www.reddit.com/dev/api';

export const getTop = () => {
  return sample.data.children;
};
