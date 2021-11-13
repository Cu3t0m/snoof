import sample from './sample-data';

const baseUrl = 'https://www.reddit.com/api/v1';

export interface Auth {
  access_token: string,
  token_type: string,
  expires_in: number,
  scope: string,
  refresh_token: string
}

export const authTokenFromCode = (code: string): Promise<Auth> => {
  const url = `${baseUrl}/access_token?grant_type=authorization_code` +
    `&code=${encodeURIComponent(code)}` +
    `&redirect_uri=${encodeURIComponent(import.meta.env.VITE_REDIRECT_URL as string)}`;

  return fetch(url, { method: 'POST', headers: {
    'Authorization': `Basic ${btoa(`${import.meta.env.VITE_CLIENT_ID as string}:${import.meta.env.VITE_CLIENT_SECRET as string}`)}`
  }}).then(res => res.json());
};

export interface Post {
  kind: string;
  data: {
    author: string;
    created_utc: number;
    name: string;
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
