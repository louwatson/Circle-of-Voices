# Circle of Voices

This is the website for my bachelor thesis in anthropology.


[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/meat147/Point-of-Sale/blob/master/LICENSE)


### Development

- download the repository
- run npm install
- run npm start
- visit [http://localhost:3000](http://localhost:3000)


### Deployment

We're deploying to [fly.dev](https://fly.io/docs/languages-and-frameworks/node/).

Currently doing a plain `flyctl deploy` won't work because of the large files in this project. To resolve, we use a local docker daemon to build the image:

```bash
flyctl deploy --local-only
```

