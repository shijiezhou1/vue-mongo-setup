# Vue-Mongo-Setup

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Project help you setup mongodb in vue 1 minute (MEVN)](#project-help-you-setup-mongodb-in-vue-1-minute-mevn)
- [To run the project](#to-run-the-project)
  - [To submit project to git](#to-submit-project-to-git)
    - [GH deploy](#gh-deploy)
    - [Setup Express - USING HEROKU](#setup-express---using-heroku)
    - [Create Heroku App Deployment](#create-heroku-app-deployment)
    - [Heroku Push](#heroku-push)
    - [View Deployment](#view-deployment)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Project help you setup mongodb in vue 1 minute (MEVN)

```
npm install -g vue-cli
npm install --save body-parser cors morgan
npm install mongodb
npm install nodemon
```

# To run the project

```
npm run start 
npm run dev // auto update when you save
```

## To submit project to git

```
git add -u &
git commit -m "update: `date +'%Y-%m-%d %H:%M:%S'`"
git push origin master
```

### GH deploy
```
cd server && cd public
git init
git add .
git commit -m 'deploy to gh'
git push -f https://github.com/shijiezhou1/vue-mongo-setup master:gh-pages
```

### Setup Express - USING HEROKU

```
cd ~
brew install heroku/brew/heroku
```

### Create Heroku App Deployment

```
heroku login
heroku create

```

### Heroku Push

Express does not allow two different cluster on expressjs.
Same as github

```
git init
git add .
git commit -am "upgrate"
```

```
heroku git:remote -a vue-two
git status
git push heroku master
```

### View Deployment

```
heroku open
```
