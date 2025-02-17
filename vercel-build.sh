#!/bin/bash

# Set Ruby environment
export RUBY_VERSION=3.2.0
export BUNDLE_DEPLOYMENT=true
export BUNDLE_PATH=vendor/bundle
export JEKYLL_ENV=production

# Install dependencies
npm install

# Add PATH to include xz tools
export PATH="/opt/vercel/path0/node_modules/.bin:$PATH"

# Install bundler and gems
gem install bundler -v 2.3.24
bundle config set --local path 'vendor/bundle'
bundle install

# Build the site
bundle exec jekyll build
