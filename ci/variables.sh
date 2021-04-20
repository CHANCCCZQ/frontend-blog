#!/bin/sh
# 根据环境自定义变量

. ./ci/lib.sh;

# 项目名称
APP_NAME="zcs-web";

# 程序包存放的目录
# export APP_PACKAGE_DIR="dist_tar";

# 程序包名称（依据分支名或标签名）
APP_PACKAGE_NAME="${APP_NAME}-${CI_COMMIT_REF_SLUG}-${CI_COMMIT_SHA:0:8}";
# gitlab-runner 服务环境变量：私钥、Node.js版本、程序包（压缩包）目录
export IDENTITY_FILE="${HOME}/.ssh/id_rsa";
export NODE_VERSION="v10.15.3";  # v8.12.0; v10.15.3
export APP_PACKAGE="./${APP_PACKAGE_NAME}.tar.gz";  # 注意：后面有`rm`操作
export RELEASE_LOG_FILE="./${APP_PACKAGE_NAME}.log"; # v0-0-8.log


# result = dev | test | pre | prod
env=$(get_deploy_env);
echo $env;

# 程序指令：构建、停止、启动
export CMD_BUILD="npm run build";
export CMD_BUILD_PRO="npm run build:pro";
export CMD_POST_CDN="npm run post-cdn";

# 目标服务器环境变量：程序包（压缩包）临时存储目录、IP组、用户、程序包运行目录（解压目录）
export SERVER_APP_TMP_PACKAGE="/tmp/${APP_PACKAGE_NAME}";
export SERVER_IP;
export SERVER_PORTS;
export SERVER_USER="songzhengxu";
export SERVER_APP_PATH="/data/htdocs/${APP_NAME}/${APP_NAME}-${env}";

#### 区分环境的配置 ####
if [[ $env = 'prod' ]]; then
  # 上传到GOPUB的文件服务器
  SERVER_USER="www";
  SERVER_IP="10.2.235.201";
  SERVER_PORTS=63305;
  SERVER_APP_TMP_PACKAGE="/data/taishan/nodejsstore/${CI_PROJECT_PATH_SLUG}/";
else
  # 测试环境
  SERVER_IP="10.4.140.148";
  SERVER_PORTS="22";
fi
