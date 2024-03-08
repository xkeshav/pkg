---

marp: true
title: Build npm package without bundler
theme: default
class: invert
transition: pivot
paginate: true
author: Keshav Mohta
Date: Mar 09, 2024
Place: React Play Meetup @sense 
footer: @xkeshav
---

<!-- markdownlint-disable-file MD001 MD041 MD025 -->

<style>
footer {
 color: mediumseagreen;
 font-size: 0.75rem;
 font-style: italic;
}

footer::first-letter {
  color: #334455;
}
</style>

<!-- _backgroundColor: whitesmoke -->
<!--  _paginate: skip -->
<!-- _class: lead  -->

# Build npm package without bundler

---

# About me

- **Name:** _Keshav Mohta_
- **Job:** SDE 3 / _J.P. Morgan Chase & Co._
- **portfolio**: [xkeshav.com](https://xkeshav.com)

---

# Agenda

- npm overview
- pre-requisite
- creation of _package.json_
- verify before publish
- test locally
- convert package into typescript
- publish to npm registry
- npm tips
- JSR (A new package registry by Deno)

---

# npm overview

- what `npm` stands for ?
<!--- https://github.com/npm/npm/commit/9c0b24898b782e2bf43073bb1d836bbe67b339b3 -->
- `npm list -g --depth=0`

---

# pre-requisite for npm package

- account in npm (use access token for faster execution), its free
- `node` and `typescript` installed globally.

  `npm i typescript -g`

- recommended to build scoped package

- `npm login`
- `npm whoami`

---

# creation of `package.json`

- `npm init --scope=@xkeshav`

#### package.json

```json
{
  "name": "@xkeshav/alphabet",
  "version": "1.0.0",
  "description": "a package which gives array of 26 letters of english alphabet in capital case",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["alphabet"],
  "author": "Keshav",
  "license": "MIT"
}
```

tip: use of `.npmignore`

---

# export your code

- write code in the file which is mentioned in `main`

### index.js

```js
export const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
```

---

# verify before publish

> `npm publish --dry-run`

---

# Test Locally --> `npm link`

in package folder run

> npm link

run below in project where we want to test

> npm link <pkg-name>

then use it

```js
import { alphabet } from '@xkeshav/alphabet';
```

to fix issues

> npm unlink <pkg-name>

---

# Test locally --> `npm pack`

in package folder run

> npm pack

this will generate tarball of ( **<package-name>.tgz** ) file

go to your project where we want to test

> npm install /location/of/<package-file-name>.tgz

this will add entry in _package.json_ as below

```json
"dependencies": {
    "@xkeshav/alphabet": "file:xkeshav-alphabet-1.0.0.tgz"
}
```

---

# convert package into typescript

> tsc -init

### _tsconfig.json_

```json
{
  "compilerOptions": {
    // ...
    "target": "es5",
    "module": "commonjs",
    "declaration": true,
    "outDir": "./lib",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

---

# changes in `package.json`

```json
{
  "main": "./lib/index.js",
  "types": "./lib/index.d.ts",
  "scripts": {
    "build": "npx tsc"
  },
  "files": ["./lib/**"],
  "dependencies": {
    "typescript": "^5.3.3"
  }
}
```

---

# publish the package

> npm publish --access=public

to update version sequentially

> npm version minor/major/patch

---

# npm tips

to see all version of a package

> npm view <pkg> versions

to reach homepage of a package

> npm home <pkg>

---

# JSR (JavaScript Registry )

> [JSR](https://jsr.io) by Deno

---

# Thanks

Q & A ?
