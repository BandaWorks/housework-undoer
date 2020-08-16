### Svelte (based on degit)

The instruction is based on sveltejs official template located at: https://github.com/sveltejs/template.

Here's the summary from `sveltejs/template`'s README.md, but make sure to check it out for expanded explanations and troubleshooting.

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