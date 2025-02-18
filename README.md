# Journal
This is my [journal]() based on continuous contract.
See why and how in [ICT Mentorship 2023 - Proper Learning & The Importance Of Journaling](https://youtu.be/FQqwmDJOtxk)
video.

[[toc]]

## Getting started
I created this template example to reuse it for my journaling and documentations.

To get a journal ready, run these commands:

```bash
nvm install --default 20.9.0
npx degit daggerok/vuepress-single-pager nq && cd $_
code . # or: webstorm . # or open with any other IDE / editor...
```

Publish that repository to GitHub and wait for GitHub Actions complete.
Then go to `Settings` -> `Pages` -> Make sure `Deploy from a branch` is selected in `Build and deployment` section:
Use branch `gh-pages` which should be created by GitHub Actions at this point of time.

Development requirements:

```bash
nvm install --default 20.9.0 ; bun dev
```

NOTE: This `Getting started` section can be replaced with what you need... Have a nice journaling!
