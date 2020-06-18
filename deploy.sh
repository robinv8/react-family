###
 # @Description: 构建脚本
 # @Date: 2020-06-18 13:54:15
 # @Author: robin
 # @LastEditors: robin
 # @LastEditTime: 2020-06-18 18:10:54
### 
#!/bin/bash
echo "build start"
echo "-------------------------------------------------------------------------"


git pull origin $(git rev-parse --abbrev-ref HEAD)
git merge origin/master
npm run build

echo "-------------------------------------------------------------------------"
echo "build end"

echo "push start"
echo "-------------------------------------------------------------------------"


git add .
git commit -m "build: 前端构建"
git pull origin $(git rev-parse --abbrev-ref HEAD)
git push origin $(git rev-parse --abbrev-ref HEAD) --no-verify

echo "-------------------------------------------------------------------------"
echo "push end"