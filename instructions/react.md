### React (based on create-react-app)

> **Prerequisites:** You need to have Node >= 8.10 and npm >= 5.6 on your machine. To check your installed versions, run `node -v` and `npm -v` in your terminal.

Official instruction is located at the official create-react-app starting page: https://create-react-app.dev/docs/getting-started

Here's the short version, but make sure to check out that page for expanded explanations and troubleshooting.

1\. Run in your terminal:
```sh
npx create-react-app app
cd app
```

It will create project directory called `app` (within your current directory) using [create-react-app](https://create-react-app.dev/docs/getting-started) and will change your current directory to `app`.

2\. Start dev server by running:

```
npm start
```

3\. Optinally, you can remove unnecessary files from source folder and only keep those that you will use:

```
app
└── src
    ├── App.css
    ├── App.js
    └── index.js
```

Make sure to remove imports of no longer existent files from `App.js`.

> Alternatively you can use instruction provided by React docs: https://reactjs.org/docs/create-a-new-react-app.html - see it for troubleshooting or for create-react-app alternatives.