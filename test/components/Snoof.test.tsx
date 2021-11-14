import React from 'react';
import nock from 'nock';
import {
  render,
  fireEvent,
  cleanup,
  within
} from '@testing-library/react';
import Snoof from '../../src/components/Snoof';
import { AuthContext } from '../../src/hooks/useAuth';
import topPostsStub1 from '../stubs/top1';
import topPostsStub2 from '../stubs/top2';
import authStub from '../stubs/auth';

describe('<Snoof />', () => {
  afterEach(cleanup);

  describe('posts list', () => {
    it('should be able to reload posts with the Load More button if post list is empty', async () => {
      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, { data: { children: [] } });

      const container = render(
        <AuthContext.Provider value={authStub}>
          <Snoof />
        </AuthContext.Provider>
      );

      let posts = container.queryAllByTestId('post-list-item');
      expect(posts.length).toEqual(0);

      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const loadMoreButton = await container.findByText('Load More');

      fireEvent.click(loadMoreButton);

      posts = await container.findAllByTestId('post-list-item');
      expect(posts.length).toEqual(topPostsStub1.data.children.length);
    });

    it('should render PostsLoading if post list is loading', async () => {
      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const container = render(
        <AuthContext.Provider value={authStub}>
          <Snoof />
        </AuthContext.Provider>
      );

      await container.findByTestId('posts-loading-placeholder');
      await container.findAllByTestId('post-list-item');
    });

    it('should be able to select a post from the list and mark as read', async () => {
      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const container = render(
        <AuthContext.Provider value={authStub}>
          <Snoof />
        </AuthContext.Provider>
      );

      await container.findAllByTestId('post-list-item');

      let post = container.getByText('Technology is rad');

      let unreadIndicator = post.parentElement.querySelector('small[data-testid="unread-indicator"]');
      expect(unreadIndicator).not.toEqual(null);

      fireEvent.click(post);

      post = within(post.parentElement).getByText('Technology is rad')
      unreadIndicator = post.parentElement.querySelector('small[data-testid="unread-indicator"]');
      expect(unreadIndicator).toEqual(null);
    });

    it('should be able to load more posts', async () => {
      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const container = render(
        <AuthContext.Provider value={authStub}>
          <Snoof />
        </AuthContext.Provider>
      );

      let posts = await container.findAllByTestId('post-list-item');
      expect(posts.length).toEqual(topPostsStub1.data.children.length);

      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=t3_2hpw7k')
        .reply(200, topPostsStub2);

      const loadMoreButton = container.getByText('Load More');
      fireEvent.click(loadMoreButton);

      await container.findByTestId('load-more-btn-loading');
      await container.findByTestId('load-more-btn');

      posts = await container.findAllByTestId('post-list-item');
      expect(posts.length).toEqual(topPostsStub1.data.children.length + topPostsStub2.data.children.length);
    });

    it('should be able to delete a post from the list', async () => {
      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const container = render(
        <AuthContext.Provider value={authStub}>
          <Snoof />
        </AuthContext.Provider>
      );

      let posts = await container.findAllByTestId('post-list-item');
      expect(posts.length).toEqual(topPostsStub1.data.children.length);

      const deleteButton = container.getAllByText('Delete')[0];
      fireEvent.click(deleteButton);

      posts = await container.findAllByTestId('post-list-item');
      expect(posts.length).toEqual(topPostsStub1.data.children.length - 1);
    });

    it('should be able to delete all posts', async () => {
      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const container = render(
        <AuthContext.Provider value={authStub}>
          <Snoof />
        </AuthContext.Provider>
      );

      let posts = await container.findAllByTestId('post-list-item');
      expect(posts.length).toEqual(topPostsStub1.data.children.length);

      const clearButton = container.getByText('Clear Posts');
      fireEvent.click(clearButton);

      posts = container.queryAllByTestId('post-list-item');
      expect(posts.length).toEqual(0);
    });

    it('should be able to reload posts from the top nav', async () => {
      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const container = render(
        <AuthContext.Provider value={authStub}>
          <Snoof />
        </AuthContext.Provider>
      );

      let posts = await container.findAllByTestId('post-list-item');
      expect(posts.length).toEqual(topPostsStub1.data.children.length);

      const clearButton = container.getByText('Clear Posts');
      fireEvent.click(clearButton);

      posts = container.queryAllByTestId('post-list-item');
      expect(posts.length).toEqual(0);

      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const reloadButton = container.getByTestId('reload-posts-btn');
      fireEvent.click(reloadButton);

      posts = await container.findAllByTestId('post-list-item');
      expect(posts.length).toEqual(topPostsStub1.data.children.length);
    });
  })

  describe('post details', () => {
    it('should show empty state if no post is selected', async () => {
      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const container = render(
        <AuthContext.Provider value={authStub}>
          <Snoof />
        </AuthContext.Provider>
      );

      await container.findAllByTestId('post-list-item');

      container.getByTestId('post-placeholder');
    });

    it('should render post details if there is a post selected', async () => {
      nock('https://oauth.reddit.com')
        .get('/r/all/top?limit=50&raw_json=1&after=undefined')
        .reply(200, topPostsStub1);

      const container = render(
        <AuthContext.Provider value={authStub}>
          <Snoof />
        </AuthContext.Provider>
      );

      await container.findAllByTestId('post-list-item');

      const post = container.getByText('Technology is rad');
      fireEvent.click(post);

      const titles = container.getAllByText('Technology is rad')
      expect(titles.length).toEqual(2);
    });
  });
});
