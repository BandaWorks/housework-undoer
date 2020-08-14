# Housework Undoer

> Story-based challenge through which you will build a complex frontend app brick by brick.

Design: [Housework-Undoer in Figma](https://www.figma.com/file/6pGrJ5d7blM1GZk8BXIEfH/Housework-Undoer)

## Instructions

### React (based on create-react-app)

**Prerequisites:** You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine. To check them, run `node -v` and `npm -v` in your terminal.

Complete instruction is located at the official create-react-app starting page: https://create-react-app.dev/docs/getting-started

Here's the short version, but make sure to check out that page for wider explanation and troubleshooting.

1\. Run in your terminal:
```sh
npx create-react-app app
cd app
npm start
```

It will create a subdirectory `app` (within your current directory) using [create-react-app](https://create-react-app.dev/docs/getting-started), change your current directory to `app` and will start the webpack-dev-server.

2\. Optinally, you can remove unnecessary files from source folder and only keep those that you will use:

```
app
└── src
    ├── App.css
    ├── App.js
    └── index.js
```

Make sure to remove imports of no longer existent files from `App.js`.

> Alternatively you can use instruction provided by React docs: https://reactjs.org/docs/create-a-new-react-app.html - see it for troubleshooting or for create-react-app alternatives.

### Vue (based on vue-cli)

Complete instruction is located at the official vue-cli "creating a project" page: https://cli.vuejs.org/guide/creating-a-project.html#vue-create.

If you don't have vue-cli installed yet, check out its installation section: https://cli.vuejs.org/guide/installation.html

1\. Run in your terminal 

```sh
# if you have error "Vue command not found", run
# `npm install -g @vue/cli`
# first to install vue-cli
vue create app
cd app
```

It will create a subdirectory `app` (within your current directory) using [@vue/cli]() and will change your current directory to `app`.

2\. Start the app by running

```
npm run serve
```

3\. Opitionally, you can remove unnecessary files from source folder and only keep those that you will use

```
app
└── src
    ├── assets/
    ├── components/
    ├── App.vue
    └── main.js
```

Make sure to remove imports of no longer existent files from `App.vue`.

**with :heart: by Banda Works**