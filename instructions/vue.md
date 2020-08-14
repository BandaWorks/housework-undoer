### Vue (based on vue-cli)

Official instruction is located at the official vue-cli "creating a project" page: https://cli.vuejs.org/guide/creating-a-project.html#vue-create.

If you don't have vue-cli installed yet, check out its installation section: https://cli.vuejs.org/guide/installation.html

Here's the summary from both pages, but make sure to check out them out for expanded explanations and troubleshooting.

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