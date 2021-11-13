import sample from './sample-data';

const unauthenticatedBaseUrl = 'https://www.reddit.com/';
const authenticatedBaseUrl = 'https://oauth.reddit.com/';

export interface Auth {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  refresh_token: string;
}

export const authTokenFromCode = (code: string): Promise<Auth> => {
  const url =
    `${unauthenticatedBaseUrl}api/v1/access_token?grant_type=authorization_code` +
    `&code=${encodeURIComponent(code)}` +
    `&redirect_uri=${encodeURIComponent(
      import.meta.env.VITE_REDIRECT_URL as string
    )}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(
        `${import.meta.env.VITE_CLIENT_ID as string}:${
          import.meta.env.VITE_CLIENT_SECRET as string
        }`
      )}`,
    },
  }).then((res) => res.json());
};

interface PreviewImg {
  id: string;
  source: {
    url: string;
    height: number;
    width: number;
  };
}
export interface Post {
  kind: string;
  data: {
    author: string;
    created_utc: number;
    name: string;
    num_comments: number;
    score: number;
    subreddit: string;
    preview?: {
      enabled: boolean;
      images: PreviewImg[];
      reddit_video_preview?: {
        hls_url: string;
      };
    };
    thumbnail?: string;
    title: string;
    is_video?: boolean;
    is_gallery?: boolean;
    is_self?: boolean;
    url: string;
    selftext?: string;
    media?: {
      reddit_video?: {
        hls_url: string;
      };
    };
    media_metadata?: any; //todo
    post_hint: 'image' | 'self' | 'hosted:video' | 'rich:video' | 'link';
    url_overridden_by_dest: string;
  };
}

interface GetTopParams {
  token: string;
  limit?: number;
}

export const getTop = ({
  limit = 50,
  token,
}: GetTopParams): Promise<Post[]> => {
  const url = `${authenticatedBaseUrl}r/all/top?limit=${limit}&raw_json=1`;

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    throw(res);
  }).then((r) => r.data.children);
};
