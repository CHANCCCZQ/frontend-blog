#!/bin/sh

# 出现错误，终止执行
function error_exit {
  echo "错误码：${?} \n 信息：${1}" 1>&2
  # 输出一些环境基本信息
  echo "home: ${HOME}"
  echo "pwd: $(pwd)";
  echo "PATH: ${PATH}";
  echo "node version: $(node --version)";
  echo "node path: $(which node)";
  echo "npm version: $(npm --version)";
  echo "npm path: $(which npm)";
  exit 1;
}

# 根据分支名和标签名判断部署环境 `if [ get_deploy_env = '1' ];`
function get_deploy_env {
  if [[ $CI_COMMIT_REF_SLUG = "develop" ]]; then
    echo 'develop';
  elif [[ $DEPLOY_ENV = "prod" ]]; then
    echo 'prod';
  else
    echo $CI_COMMIT_REF_SLUG;
  fi
}

function check_variables {
  if [[ ! $NODE_VERSION ]]; then
    error_exit "未配置 NODE_VERSION";
  fi

  if [[ ! $APP_PACKAGE ]]; then
    error_exit "未配置 APP_PACKAGE";
  fi

  if [[ ! $IDENTITY_FILE ]]; then
    error_exit "未配置 IDENTITY_FILE";
  fi

  if [[ ! $SERVER_APP_TMP_PACKAGE ]]; then
    error_exit "未配置 SERVER_APP_TMP_PACKAGE";
  fi

  if [[ ! $CMD_BUILD ]]; then
    error_exit "未配置 CMD_BUILD";
  fi

  # if [[ ! $CMD_STOP_APP ]]; then
  #   error_exit "未配置 CMD_STOP_APP";
  # fi

  # if [[ ! $CMD_START_APP ]]; then
  #   error_exit "未配置 CMD_START_APP";
  # fi

  if [[ ! $SERVER_IP ]]; then
    error_exit "未配置 SERVER_IP";
  fi

  if [[ ! $SERVER_APP_PATH ]]; then
    error_exit "未配置 SERVER_APP_PATH";
  fi

  if [[ ! $SERVER_USER ]]; then
    error_exit "未配置 SERVER_USER";
  fi
}
