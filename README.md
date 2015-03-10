# html5-boilerplate
Gulp/Bower boilerplates for html5 applications. Requires node.js installed.

## Options available
There are a few branches to this project corresponding to multiple configurations for your application.
* `master` only brings [bower](http://bower.io/), a [sass](http://sass-lang.com/) compiler, and starts you off with [normalize.css](http://necolas.github.io/normalize.css/)
* `coffee` brings everything from `master`, plus the ability to compile javascript and [coffeescript](http://coffeescript.org/)
* `bourbon/neat` brings everythign from `coffee`, but also includes [bourbon](https://github.com/thoughtbot/bourbon) and [neat](https://github.com/thoughtbot/neat) in your css pipeline


## Setting up your tools
````
$ git clone https://github.com/Plaristote/html5-boilerplate.git my-html5-application
$ cd my-html5-application
$ rm -Rf .git # you'll probably want to make your own repository
$ npm install
$ gulp
````
