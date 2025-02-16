#!/bin/bash

# Install dependencies
npm install

# Set environment variables for nokogiri
export NOKOGIRI_USE_SYSTEM_LIBRARIES=true
export BUNDLE_BUILD__NOKOGIRI="--use-system-libraries"

# Install bundler and gems
gem install bundler -v 2.3.24
bundle config set --local path 'vendor/bundle'
bundle install

# Build the site
JEKYLL_ENV=production bundle exec jekyll build
