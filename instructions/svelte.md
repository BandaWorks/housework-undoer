### Svelte (based on degit)

> **Prerequisites:** You need to have Node >= 8.10 and npm >= 5.6 on your machine. To check the versions installed on your machine, run `node -v` and `npm -v` in your terminal

Here's the summary from `sveltejs/template` [guide](https://github.com/sveltejs/template#svelte-app). Make sure to check it out for expanded explanations and troubleshooting.

1\. Run in your terminal

```sh
npx degit sveltejs/template svelte-app
cd svelte-app
```

It will create a subdirectory `svelte-app` (within your current directory) using [degit](https://github.com/Rich-Harris/degit) and will change your current directory to `svelte-app`.

2\. Install the dependencies:

```sh
# if you are using yarn, run `yarn install` instead
npm install
```

3\. Optionally, If you intend to use TypeScript with Svelte, you need to run `setupTypeScript.js`:

```sh
node scripts/setupTypeScript.js
# if you are using yarn, run `yarn install` instead
npm install
```

> Check out Svelte's blog post ["Svelte <3 TypeScript"](https://svelte.dev/blog/svelte-and-typescript) for more information on using TS with Svelte.

Don't forget to commit the changes before starting coding :wink:

And yeah, that's it — you are ready to start coding!

### What's next?

Go to the [Task #001: Today's Housework](http://bandaworks.tilda.ws/housework-undoer/task-1) page to see the first feature you will build.