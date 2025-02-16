#!/bin/bash

# Install Ruby if not present
if ! command -v ruby &> /dev/null; then
    curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer | bash
    export PATH="$HOME/.rbenv/bin:$PATH"
    eval "$(rbenv init -)"
    rbenv install 3.2.0
    rbenv global 3.2.0
fi

# Install bundler
gem install bundler -v 2.3.24

# Install dependencies
bundle config set --local path 'vendor/bundle'
bundle install

# Build the site
bundle exec jekyll build
