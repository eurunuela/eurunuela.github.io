# build.sh

# Install xz-utils
sudo apt-get update && sudo apt-get install -y xz-utils

# Install Ruby dependencies
bundle install

# Build your Jekyll site
bundle exec jekyll build