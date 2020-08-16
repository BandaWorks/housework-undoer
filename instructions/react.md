### React (based on create-react-app)

> **Prerequisites:** You need to have Node >= 8.10 and npm >= 5.6 on your machine. To check the versions installed on your machine, run `node -v` and `npm -v` in the terminal.

Here's the summary from create-react-app [Getting Started](https://create-react-app.dev/docs/getting-started) documentation. Make sure to check it out for expanded explanations and troubleshooting.

1\. Run in your terminal:
```sh
npx create-react-app react-app
cd react-app
```

It will create project directory called `react-app` (within your current directory) using [create-react-app](https://create-react-app.dev/docs/getting-started) and will change your current directory to `react-app`.

2\. Start dev server by running:

```
npm start
```

3\. Optinally, you can remove unnecessary files from source folder and only keep those that you will use:

```
react-app
└── src
    ├── App.css
    ├── App.js
    └── index.js
```

Make sure to remove imports of no longer existent files from `App.js`.

> Don't forget to commit the changes before starting coding :wink:

And yeah, that's it — you are ready to start coding!

### What's next?

Go to the [Task #001: Today's Housework](http://bandaworks.tilda.ws/housework-undoer/task-1) page to see the first feature you will build.