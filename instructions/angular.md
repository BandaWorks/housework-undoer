### Angular (based on angular-cli)

> **Prerequisites:** Angular requires a current, active LTS, or maintenance LTS version of Node.js. Current requirements can be found [here](https://unpkg.com/@angular/cli/package.json#:~:text=%22engines%22%3A%20%7B,%7D%2C). To check the versions installed on your machine, run `node -v` and `npm -v` in the terminal.

Here's the summary from the angular [Getting Started](https://angular.io/guide/setup-local) documentation. Make sure to check it out for expanded explanations and troubleshooting.

1\. Run in your terminal

```sh
# if you have error "Command ng not found", run
# `npm install -g @angular/cli`
# first to install angular-cli
ng new angular-app
cd angular-app
```

It will create a subdirectory `angular-app` (within your current directory) using [@angular/cli](https://angular.io/cli) and will change your current directory to `angular-app`.

2\. Start the app using [ng](https://angular.io/cli#command-overview) executable:

```
ng serve
```

Don't forget to commit the changes before starting coding :wink:

And yeah, that's it — you are ready to start coding!

### What's next?

Go to the [Task #001: Today's Housework](http://bandaworks.tilda.ws/housework-undoer/task-1) page to see the first feature you will build.