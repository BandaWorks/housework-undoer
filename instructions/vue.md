### Vue (based on vue-cli)

> **Prerequisites:** Vue CLI requires Node.js version 8.9 or above (8.11.0+ recommended).

Here's the summary from Vue [Creating a project](https://cli.vuejs.org/guide/creating-a-project.html#vue-create.) documentation. Make sure to check it out for expanded explanations and troubleshooting.

1\. Run in your terminal

```sh
# if you have error "Vue command not found", run
# `npm install -g @vue/cli`
# first to install vue-cli
vue create vue-app
cd vue-app
```

It will create a subdirectory `vue-app` (within your current directory) using [@vue/cli]() and will change your current directory to `vue-app`.

2\. Start the app by running

```
npm run serve
```

3\. Opitionally, you can remove unnecessary files from source folder and only keep those that you will use

```
vue-app
└── src
    ├── assets/
    ├── components/
    ├── App.vue
    └── main.js
```

Make sure to remove imports of no longer existent files from `App.vue`.

> Don't forget to commit the changes before starting coding :wink:

And yeah, that's it — you are ready to start coding!

### What's next?

Go to the [Task #001: Today's Housework](http://bandaworks.tilda.ws/housework-undoer/task-1) page to see the first feature you will build.