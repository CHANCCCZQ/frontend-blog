#!/bin/sh


. ./ci/lib.sh;

# 检查环境变量配置
check_variables;


# 检查 APP_PACKAGE 文件
if [ ! -f $APP_PACKAGE ]; then
  error_exit "${APP_PACKAGE}文件不存在";
fi

env=$(get_deploy_env);

# 上传程序：scp上传程序包到服务器
echo "----- 开始上传代码包 -----";
for PORT in $SERVER_PORTS
do
  echo "----- 开始上传代码包到 ${SERVER_IP}:${PORT} -- ${APP_PACKAGE} ---${SERVER_APP_TMP_PACKAGE}";
  scp -P $PORT -i $IDENTITY_FILE -o StrictHostKeyChecking=no $APP_PACKAGE $SERVER_USER@$SERVER_IP:$SERVER_APP_TMP_PACKAGE   || error_exit "上传代码包失败 ${SERVER_IP}";  
  echo "----- 完成上传代码包到 ${SERVER_IP}:${PORT} -----";
  if [[ $env = 'prod' ]]; then
    echo "开始上传发布日志文件"
    scp -P $PORT -i $IDENTITY_FILE -o StrictHostKeyChecking=no $RELEASE_LOG_FILE $SERVER_USER@$SERVER_IP:$SERVER_APP_TMP_PACKAGE   || error_exit "上传日志文件失败 ${SERVER_IP}";
    echo "----- 完成上传日志文件包到 ${SERVER_IP}:${PORT} -----";
  fi
done
echo "----- 完成上传代码包 -----";

# # 删除程序包以免缓存
# if [ -f $APP_PACKAGE_DIR ]; then
#   rm -rf $APP_PACKAGE_DIR;
# fi

if [[ $env = 'prod' ]]; then
  exit;
fi
# 部署程序：登录远程服务器&部署服务
for PORT in $SERVER_PORTS; do

echo "开始部署${SERVER_IP},${PORT}";
# 登录服务器执行部署脚本
ssh -p $PORT -i $IDENTITY_FILE -o StrictHostKeyChecking=no $SERVER_USER@$SERVER_IP "

# 出现错误，终止执行
function error_exit {
  echo "错误码：\${?} \n 信息：\${1}" 1>&2
  # 输出目标服务器环境信息
  echo "home:" \$HOME
  echo "pwd:" \$(pwd);
  echo "PATH:" \$PATH;
  echo "node version:" \$(node --version);
  echo "node path:" \$(which node);
  echo "npm version:" \$(npm --version);
  echo "npm path:" \$(which npm);
  exit 1;
}




# 创建APP目录&进入
mkdir -p $SERVER_APP_PATH $SERVER_APP_PATH \
  || error_exit "创建 SERVER_APP_PATH 失败";

cd $SERVER_APP_PATH \
  || error_exit "进入 ${SERVER_APP_PATH}失败";

# 移除旧代码
if [ -f ./package.json ]; then
  rm -rf ./* || error_exit "删除旧代码失败";
fi

# 部署新代码
tar -z -x -f ${SERVER_APP_TMP_PACKAGE} --strip-components 2 \
  || error_exit "解压新代码失败";
"

echo "完成部署${SERVER_IP}";

done

