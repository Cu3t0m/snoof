// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
// jest doesn't run in a browser we don't have fetch 🤡
import 'isomorphic-unfetch';
import nock from 'nock';

nock.disableNetConnect();

global.matchMedia = global.matchMedia || function (query) {
  return {
    matches: false,
    onchange: null,
    media: query,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  };
};

process.env.VITE_CLIENT_ID = 'client id';
process.env.VITE_CLIENT_SECRET = 'client secret';
process.env.VITE_REDIRECT_URL = 'wowoweewow'
