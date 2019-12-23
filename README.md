[![Build Status](https://travis-ci.org/gildniy/ny-flights.svg?branch=develop)](https://travis-ci.org/gildniy/ny-flights)
[![Coverage Status](https://coveralls.io/repos/github/gildniy/ny-flights/badge.svg?branch=develop)](https://coveralls.io/github/gildniy/ny-flights?branch=develop)
# NEW YORK FLIGHTS LISTING (NYFL)

## Description

This Project is a project built for learning purpose. It display different Flights for the New-York airports and with their Prices.
And the the Prices can be converted in different currencies.

## API
This project uses public API from [RapidApi](https:rapidapi.com):

    1. Currency Converter:
    https://currency-converter5.p.rapidapi.com
    
    2. Flights search:
    https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com
    
## Link to the live site (Hosted on Heroku)

[New York Flights listing](https://ny-flights-listing.herokuapp.com/)
    
## Screen shot

![image](https://user-images.githubusercontent.com/3137192/71397452-48c98300-2626-11ea-92c9-e3703c6de4c9.png)

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v12.13.1

    $ npm --version
    6.13.4

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/gildniy/ny-flights.git
    $ cd ny-flights
    $ npm install

### Configure app

Copy `keys.sample.js` to `keys.js` then edit it with the key where you have setup:

- export const RAPID_API_KEY = 'xxx'

## Start & watch

    $ npm start

## Languages & tools

### HTML

- HTML is used for templating.

### JavaScript

- [React](http://facebook.github.io/react) is used for UI.

### CSS

- [Sass](https://sass-lang.com/) is used to write styling.

### Travis CI and Coveralls badges

The project uses [Travis CI](https://travis-ci.org/) for continious integration and [Coveralls](https://coveralls.io/) for testing coverage
