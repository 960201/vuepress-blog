#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 提交到暂存区
git add .
# 提交到本地仓库
git commit -m '二次修改'
# 连接远程仓库地址
# git remote add origin https://github.com/960201/vuepress-blog.git
# push到github仓库
git push
