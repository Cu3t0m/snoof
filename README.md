# snoof

A small reddit client for browsing the top posts of `r/all` - built with typescript and react.

#### Desktop

<img width="1891" alt="IMG_4571" src="https://user-images.githubusercontent.com/2031802/141673033-c76517c0-003c-4a76-8562-a856c2b5cafb.png">

#### Mobile

![giphy](https://user-images.githubusercontent.com/2031802/141673220-82402a56-eb96-4274-a2eb-ef9cc9f2859f.gif)

## Features

- responsive
- infinite loading
- read/unread
- app state preservation
- support for all media types (photos/videos/text/links)

## Development

### Install

`npm install`

### Run locally

Create a reddit app at https://www.reddit.com/prefs/apps (with http://localhost:3000/ as the redirect_uri) and add a `.env.local` file to the root directory with:

```
VITE_CLIENT_ID=client_id
VITE_CLIENT_SECRET=client_secret
VITE_REDIRECT_URL=http://localhost:3000/
```

`npm run dev`

Open [http://localhost:3000](http://localhost:3000)

This application uses [Vite](https://vitejs.dev) for development.

### Build

`npm run build`
