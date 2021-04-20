#!/bin/sh


. ./ci/lib.sh;

# # 不存在程序包的目录则创建
# if [ ! -f $APP_PACKAGE_DIR ]; then
#   mkdir $APP_PACKAGE_DIR
# fi


# 执行构建 `npm run build-${env}`

if [[ $env = 'prod' ]]; then
  $CMD_BUILD_PRO || error_exit "构建失败";
else
  $CMD_BUILD || error_exit "构建失败";
fi


# 存在则删除
if [ -f $APP_PACKAGE ]; then
  rm $APP_PACKAGE;
fi


# 打包
tar -z -c -f $APP_PACKAGE ./dist/* || error_exit "打包失败";

echo "程序包体积：$(du -h $APP_PACKAGE)"

env=$(get_deploy_env);

# 从`git commit `取内容，自动生成“发布日志”文件。
echo "生成日志文件$RELEASE_LOG_FILE"

echo $CI_COMMIT_MESSAGE > $RELEASE_LOG_FILE;
