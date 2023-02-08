#!/bin/bash
# 以下代码用于windows，其他系统请自行修改
# 进入根目录 因为这个sh文件在 /scripts/文件夹下
set -e
cd ../
pnpm install
pnpm prettier
# 运行本地文档站
start "http://localhost:2001/"
pnpm run docs