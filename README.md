<div align="center">

# CRA TypeScript Firebase Template

[![npm](https://img.shields.io/npm/v/cra-template-firebase-starter.svg)](https://npmjs.com/package/cra-template-firebase-starter)
[![License MIT](https://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/pettiboy/cra-template-firebase-starter/main/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/pettiboy/cra-template-firebase-starter/pulls)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

Make sure you ⭐️ this [`repository`](https://github.com/pettiboy/cra-template-firebase-starter) if you find it helpful or interesting :)

</div>

## ✨ Installation

```bash
npx create-react-app your-project-name --template typescript-firebase
```

OR

```bash
yarn create react-app your-project-name --template typescript-firebase
```

`npx` command installs the most recent stable version of CRA from npm.

`--template` parameter points to this template, note that `cra-template-` prefix is omitted.

## ⚙️ Usage

### SetUp firebase

1. Go to https://console.firebase.google.com/

2. Click on `Add project`.

   - Follow steps and create project.

3. Click on web icon.

   - Register web app.
   - You will get details for setting up `Firebase SDK`.

4. Add your config details in your `.env`.

### SetUp SignIn with google

1. In your project console, click on `Authentication` and `Get Started`.

2. In `Sign-in method`, click on `Google`.

3. Toggle `Enable` and click on `Save`.

### To create a new screen

1. Create a new component in `src/screens`.

2. In your `src/config/routes.ts`.

```js
{
    path: "/your-route",
    component: YourScreenComponentName,
    name: "Screen Name For Reference",
    protected: false, // if user needs to be authenticated to access this screen
}
```

### To Deploy on GitHub Pages

1. Add your domain (your-github-username.github.io) to the OAuth redirect domains list in the `Firebase console -> Auth section -> Sign in method tab`.

2. run

```bash
npm run deploy
```

## ✨ Featues

### 1. Routing

Routing setup using `react-router-dom`.

- With easily implementable private routes (routes only authenticated users can use).

- Easily add new screens.

### 2. Authentication

Authentication implemented implemented

SignIn with Google implemented using `firebase` and `react-firebase-hooks`.

### 3. Firebase Configured

Firebase configured with `GoogleAuthProvider` implemented.

### 4. Material UI

Login Screen UI built using `@mui/material`.

## 🔧 File Structure

```
├── src
│   ├── components
│   │   ├── auth
│   │   |   ├── AuthChecker.js
│   │   |   ├── AuthContainer.js
│   │   |   ├── Logout.js
│   │   ├── utils
│   │   |   ├── Center.js
│   ├── config
│   │   ├── firebase.config.js
│   │   ├── firebase.js
│   │   ├── routes.js
│   ├── screens
│   │   ├── Login.js
│   │   ├── Home.js
```
