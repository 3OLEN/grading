#!/bin/bash
# ======================================================================================================================
#         FILE: _common.bash
#        USAGE: Only as an import: `source _common.bash`
# REQUIREMENTS:
#               * $PROJECT_PATH: Describe the real path to project `front`.
# ======================================================================================================================


# Check $PROJECT_PATH variable is defined
if [ -z "${PROJECT_PATH}" ]; then
    echo -e "\033[31m\`\$PROJECT_PATH\` is not defined.\033[0m"
    exit 1
fi


# ------------------------------------------------------- Vars ------------------------------------------------------- #
# Docker
readonly ANGULAR_DOCKER_IMAGE="olenbvillena/angular-17:1.0.0"

readonly ANGULAR_APP_CONTAINER_NAME="olen-grading-front-app"

# Project
readonly PROJECT_BIN_PATH="$(realpath "${PROJECT_PATH}"/bin)"
readonly PROJECT_BIN_SETUP_PATH="$(realpath "${PROJECT_BIN_PATH}"/setup)"

readonly ROOT_PATH="$(realpath "${PROJECT_PATH}"/..)"
readonly ROOT_BIN_PATH="$(realpath "${ROOT_PATH}"/bin)"


# ---------------------------------------------------- Functions ----------------------------------------------------- #
check_angular_image() {
  if ! docker image inspect "${ANGULAR_DOCKER_IMAGE}" &> /dev/null; then
    info "Docker image \`${ANGULAR_DOCKER_IMAGE}\` does not exist; should build it..."

    source "${PROJECT_BIN_SETUP_PATH}/docker-angular"
  fi
}

stop_running_container() {
  if [ $# -eq 0 ]; then
    error "\`stop_running_container\` function requires \`container_name\` parameter."
    exit 1
  fi
  readonly local CONTAINER_NAME="${1}"
  readonly local STOP_CONTAINER="${2:-true}"

  if ! docker container inspect "${CONTAINER_NAME}" &> /dev/null; then
    return
  fi

  if [ "${STOP_CONTAINER}" = false ]; then
    error "Docker container \`${CONTAINER_NAME}\` is already running..."
    exit 1
  fi

  info "Docker container \`${CONTAINER_NAME}\` is already running; should stop it..."
  docker stop "${CONTAINER_NAME}"
}


# ---------------------------------------------------- Execution ----------------------------------------------------- #
source "${ROOT_BIN_PATH}/_common.bash"
