#!/bin/bash

# Utils
error() {
  echo -e "\033[31m$1\033[0m"
}
info() {
  echo -e "\033[36m$1\033[0m"
}
success() {
  echo -e "\033[32m$1\033[0m"
}
title() {
  echo -e "\033[35m$1\033[0m"
}
warning() {
  echo -e "\033[33m$1\033[0m"
}

trim() {
    local string="$*"
    # Drop beginning spaces
    string="${string#"${string%%[![:space:]]*}"}"
    # Drop ending spaces
    string="${string%"${string##*[![:space:]]}"}"

    echo -n "${string}"
}

