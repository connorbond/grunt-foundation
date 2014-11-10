# Grunt: Foundation + Compass + Bless
### (Feel free to expand or gulp-ify) - Connor Bond

This is a template for your next web project using Foundation, Grunt, Compass, and Bless!

## Requirements

You'll need to have the following items installed before continuing.

* [Ruby](http://ruby-lang.org/): OSX/Linux should have Ruby installed. If not, check the website.
* [Node.js](http://nodejs.org): Install
* [Grunt](http://gruntjs.com/): Run `npm install -g grunt-cli` (note: sudo if on OSX for all)
* [Bower](http://bower.io): Run `npm install -g bower`
* [Sass](http://sass-lang.com): Run `gem install sass`
* [Compass](http://compass-style.org): Run `gem install compass`


## Setup

Navigate into working directory:

`cd *dir*`

Install all the dependencies (handily listed for you already - feel free to add):

`npm install`
`bower install`

## Compile

Just run:

`grunt`

This will compile the Sass with Compass (cleaning cache), run it against Bless for crappy IE selector limits and give you a handy popup alert when done. Winner!

It'll then keep watching for changes, and repeating the above.

P.S. just want to compile once without watching?

`grunt build`

P.P.S. just want Bless?

`grunt bless`

P.P.P.S you can add your own custom 'tasks' to the Gruntfile like so:

`grunt.registerTask('your-task', ['foo','bar']);`


## Directory Structure

* `assets`: All assets (scss, ui [images], js)
* `assets/scss/_style.scss`: Site-specific styles (included last in app.scss for highest specificity)
* `assets/scss/app.scss`: Pulls everything together with includes.
* `assets/css/app.css`: All that hard work, in one handy file.


