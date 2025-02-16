#!/bin/bash

# Install system dependencies
yum install -y xz-utils build-essential zlib1g-dev || true

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

# Configure bundler
bundle config build.nokogiri --use-system-libraries
bundle config set --local path 'vendor/bundle'

# Install dependencies using npm
npm install

# Use npx to run the jekyll build
npm run build
