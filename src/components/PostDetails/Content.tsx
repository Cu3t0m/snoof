import { FunctionComponent, useRef } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { Post } from '../../api/reddit';

interface ContentProps {
  post: Post;
}

const Content: FunctionComponent<ContentProps> = ({ post }) => {
  const {
    data: {
      url,
      preview,
      selftext,
      media,
      is_gallery,
      media_metadata,
      post_hint,
      url_overridden_by_dest,
      is_self,
    },
  } = post;
  const playerRef = useRef<HTMLVideoElement>(null);

  if (post_hint === 'hosted:video' && media?.reddit_video) {
    return (
      <div className="row align-items-center">
        <ReactHlsPlayer
          playerRef={playerRef}
          src={media.reddit_video.hls_url}
          autoPlay={false}
          controls={true}
        />
      </div>
    );
  }
  if (post_hint === 'rich:video' && preview?.reddit_video_preview) {
    return (
      <div className="row align-items-center">
        <ReactHlsPlayer
          playerRef={playerRef}
          src={preview.reddit_video_preview.hls_url}
          autoPlay={false}
          controls={true}
        />
      </div>
    );
  }

  if (post_hint === 'image') {
    return (
      <img
        className="mb-2 rounded mx-auto d-block img-fluid"
        src={encodeURI(url_overridden_by_dest)}
      />
    );
  }

  if (post_hint === 'link') {
    return <LinkPreview url={url} />;
  }

  if (is_self) {
    return <div>{selftext}</div>;
  }

  if (is_gallery) {
    const images = Object.values(media_metadata).map((o: any) => o.s.u);
    return (
      <div>
        {images.map((img) => (
          <img
            key={img}
            className="mb-2 rounded mx-auto d-block img-fluid"
            src={encodeURI(img)}
          />
        ))}
      </div>
    );
  }

  return <div>Oops - could not render content!</div>;
};

export default Content;
