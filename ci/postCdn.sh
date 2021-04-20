#!/bin/sh


. ./ci/lib.sh;


# 发布cdn
$CMD_POST_CDN || error_exit "构建失败";
