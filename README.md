# Vite starter - HTML | CSS | Vanilla TypeScript

This is a Vite starter for vanilla TypeScript projects. It is entended to be used together with `degit` to speed up the workflow of starting a new project from scratch.

This approach is much quicker than using `git clone`, because you're not downloading the entire git history!

## Getting started

`degit` allows to make copies of git repositories, which is very handy to your project with a template

### 1. Create a local copy from a github repo

> **_NOTE:_** you can use `npx` as an alternative to a global installation.

First install [`degit`] globally using your favorite package manager:

```console
yarn global add degit
```

Then download a copy of a Github repo to your current working directory:

```console
degit user/repo

# these commands are equivalent
degit github:user/repo
degit git@github.com:user/repo
degit https://github.com/user/repo
```

> **_NOTE:_** the default branch is `main`. Please refer to the official [documentation](https://github.com/Rich-Harris/degit) to see all the available options.

### 2. Install the project dependencies

Initialize your project by installing all the required dependencies:

```console
yarn install
```

### 3. Initialize a local git repository

Create your own local repo:

```console
git init
```

### 4. Start coding!

Start the dev server:

```console
yarn dev
```

Build your app (to the `dist` folder):

```console
yarn build
```

## Author

- Github - [@ddZ6ii](https://github.com/ddZ6ii)
