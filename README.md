# Portfolio page example Beta

used React, Sass, and ChatGPT for reference and translation.

It's Not Reactive page. (Just for Desktop..)

It's Beta version with bad structure, messy CSS and codes with no comments,,, no need to inspect,,,

See live demo here : https://songi255.github.io/portfolio/

# How to deploy with github-page

install gh-pages: `npm i gh-pages --save-dev`

add followings to package.json

- add scripts: `"deploy": "gh-pages -d build"`
- add "homepage" at the top level: `"homepage": "https://{yourId}.github.io/{yourRepositoryName}"`

run `npm run build` and `npm run deploy` then it'll make new branch `gh-pages`, and deploy build folder to github.

more settings in repository settings - page
