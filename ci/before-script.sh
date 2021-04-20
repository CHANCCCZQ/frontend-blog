#!/bin/sh

# 加载库
. ./ci/lib.sh;


# 加载 nvm
export NVM_DIR="${HOME}/.nvm";
if [ -s "${NVM_DIR}/nvm.sh" ]; then
  . "${NVM_DIR}/nvm.sh" || error_exit "执行 nvm.sh 失败";
else
  error_exit "还没安装 nvm";
fi


# 加载 node
nvm use $NODE_VERSION || error_exit "这个版本未安装（${NODE_VERSION}）";

# npm install -g yarn --production --registry=https://registry.npm.taobao.org/
# yarn -v



