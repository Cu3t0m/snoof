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
      'https://phwebi.github.io/snoof/'
    )}`;

  return fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(
        `${'dWRUuIopxj6vVknOqBpUvg'}:${'aZVdSJgcPyK34XXsdnv4UnQzq-FChA'
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

interface MediaInfo {
  id: string;
  s: {
    x: number;
    y: number;
    u: string; // image url for gallery photos
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
    media_metadata?: {
      [key: string]: MediaInfo;
    };
    post_hint: 'image' | 'self' | 'hosted:video' | 'rich:video' | 'link';
    url_overridden_by_dest: string;
  };
}

interface GetTopParams {
  token: string;
  limit?: number;
  after?: string;
}

interface GetTopResp {
  posts: Post[];
  after: string;
  dist: number;
}

export const getTop = ({
  limit = 50,
  after,
  token,
}: GetTopParams): Promise<GetTopResp> => {
  const url = `${authenticatedBaseUrl}r/all/top?limit=${limit}&raw_json=1&after=${after}`;

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw res;
    })
    .then(({ data }) => {
      return {
        posts: data.children,
        after: data.after,
        dist: data.dist,
      };
    });
};
