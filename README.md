# 🌏 Express Sample

[![Web](https://img.shields.io/badge/web-blue?logo=w3c)](https://github.com/topics/web)
[![JavaScript](https://img.shields.io/badge/javascript-blue?logo=javascript)](https://github.com/topics/javascript)
[![NodeJS](https://img.shields.io/badge/node-blue?logo=node.js)](https://github.com/topics/node)

ExpressJS sample project featuring useful libraries.

![Screenshot](./screenshot.gif?raw=true)

## 📜 Introduction

This is a simple mock backend based Website project built with ExpressJS. It is setup with some common NodeJS libraries.
This project can be used for learning purposes or as a starter template for starting a project.

## 🏁 Getting started

1. Clone the repository:

```bash
cd somewhere
git clone https://github.com/practical-works/express-sample.git
cd express-sample
```

2. Install the dependencies:

```bash
npm i
```

3. Install [**Nodemon**](https://github.com/remy/nodemon/) globally:

```bash
npm i -g nodemon
```

4. Run server for development:

```bash
npm run dev
```

## ✈️ Deployment

> 💡 It is [**advised**](https://github.com/motdotla/dotenv#should-i-commit-my-env-file) to not push the `.env` file in production. either delete it or add it to `.gitignore`.

To deploy the project in a node environment:

1. Push the repository to a node server using a service like [Heroku](https://heroku.com).

2. Install the dependencies:

```bash
npm i
```

3. Start server for production:

```bash
npm start
```

## 🚀 Development

### 🏭 Environment

- Runtime: [**NodeJS**](https://github.com/nodejs)
- Package Manager: [**NPM**](https://github.com/npm)
- Editor: [**Sublime Text**](https://www.sublimetext.com)

### 🌑 Backend

- ⚛️ Core:
  - Main: [**NodeJS**](https://github.com/nodejs/node) / [**ExpressJS**](https://github.com/expressjs/express)
  - Template Engine: [**EJS**](https://github.com/mde/ejs)
- 🔧 Utils:
  - Environment Configuration: [**DotEnv**](https://github.com/motdotla/dotenv)
  - Console Logging: [**Morgan**](https://github.com/expressjs/morgan)
  - Console Coloration: [**Colors.JS**](https://github.com/Marak/colors.js)
  - Hot Reloading: [**LiveReload**](https://github.com/napcs/node-livereload) / [**Connect-LiveReload**](https://github.com/intesso/connect-livereload)

### 🌕 Frontend

- 🎨 UI: [**Bulma**](https://github.com/jgthms/bulma)

## 📃 License

Licensed under [MIT](./LICENSE).
