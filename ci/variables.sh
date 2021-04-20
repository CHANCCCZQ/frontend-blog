#!/bin/sh
# 根据环境自定义变量

. ./ci/lib.sh;

# 项目名称
APP_NAME="frontend-log";

export CMD_BUILD="yarn docs:build";

# 程序包名称（依据分支名或标签名）
APP_PACKAGE_NAME="${APP_NAME}-${CI_COMMIT_SHA:0:8}";
# gitlab-runner 服务环境变量：私钥、Node.js版本、程序包（压缩包）目录
export IDENTITY_FILE="${HOME}/.ssh/id_rsa";
export NODE_VERSION="v10.15.3";  # v8.12.0; v10.15.3
export APP_PACKAGE="./${APP_PACKAGE_NAME}.tar.gz";  # 注意：后面有`rm`操作
export RELEASE_LOG_FILE="./${APP_PACKAGE_NAME}.log"; # v0-0-8.log


# 目标服务器环境变量：程序包（压缩包）临时存储目录、IP组、用户、程序包运行目录（解压目录）
export SERVER_APP_TMP_PACKAGE="/tmp/${APP_PACKAGE_NAME}";
export SERVER_IP;
export SERVER_PORTS;
export SERVER_USER="songzhengxu";
export SERVER_APP_PATH="/data/htdocs/${APP_NAME}/${APP_NAME}";

SERVER_IP="10.4.140.148";
SERVER_PORTS="22";
