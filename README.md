# Grunt: Foundation + Compass + Bless
### (Feel free to expand or gulp-ify) - Connor Bond

This is a template for your next web project using Foundation, Grunt, Compass, and Bless!

## Requirements

You'll need to have the following items installed before continuing.

* [Ruby](http://ruby-lang.org/): If you are on OSX or Linux, you should already have Ruby installed. If not, check their website for installation options.
* [Node.js](http://nodejs.org): Install
* [Grunt](http://gruntjs.com/): Run `npm install -g grunt-cli` (sudo if on mac)
* [Bower](http://bower.io): Run `npm install -g bower`
* [Sass](http://sass-lang.com): Run `gem install sass`
* [Compass](http://compass-style.org): Run `gem install compass`


## Quickstart

Navigate into working directory:

`cd *dir*`

IInstall all the dependencies (handily listed for you already - feel free to add):

`npm install`
`bower install`

Finally, just run:

`grunt`

This will compile the Sass, run it against Bless for crappy IE selector limits and give you a handy popup. Winner!


P.S. just want to compile once?

`grunt build`

P.P.S. just want Bless?

`grunt bless`


## Directory Structure

* `assets`: All assets (scss, ui[images] js)
* `assets/scss/_settings.scss`: Foundation configuration settings
* `assets/scss/app.scss`: Site-specific styles (included last for highest specificity)
* `assets/css/app.css`: All that hard work, in one handy file


