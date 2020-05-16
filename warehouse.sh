#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交到暂存区
git add .
# 提交到本地仓库
git commit -m '二次上传阶段'
# push到github仓库
git push
