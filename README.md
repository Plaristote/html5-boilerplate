# html5-boilerplate
Gulp/Bower boilerplates for html5 applications. Requires node.js installed.

## Options available
There are a few branches to this project corresponding to multiple configurations for your application.
* `master` only brings [bower](http://bower.io/), a [sass](http://sass-lang.com/) compiler, and starts you off with [normalize.css](http://necolas.github.io/normalize.css/)
* `coffee` brings everything from `master`, plus the ability to compile javascript and [coffeescript](http://coffeescript.org/)
* `bourbon/neat` brings everythign from `coffee`, but also includes [bourbon](https://github.com/thoughtbot/bourbon) and [neat](https://github.com/thoughtbot/neat) in your css pipeline


## Developping with html5-boilerplate
### Setting up your tools
````
$ git clone https://github.com/Plaristote/html5-boilerplate.git my-html5-application
$ cd my-html5-application
$ rm -Rf .git # you'll probably want to make your own repository
$ npm install
````

### Developping
Gulp will compile your `scss` and `javascript`/`coffee` files as you code. Make sure to always have a `gulp` process running while you code:
```
$ gulp
```

If you made changes while `gulp` wasn't running, use the `recompile` task.
```
$ gulp recompile
```

### Testing
The `coffee` and `bourbon/neat` branches come with a testing environment, using `jasmine` and `phantomjs`. You may write your unit tests in `javascript` or `coffeescript` in the `spec/src` directory.

In order to run your specs, go to the `spec` directory and run the `gulp tests` command. You may also simply launch the default task, and your tests will run whenever a change in the application source or in your tests is detected.
