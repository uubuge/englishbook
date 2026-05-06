# 部署脚本
Write-Host "🚀 开始构建项目..." -ForegroundColor Green

# 1. 构建项目
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 构建失败！" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 构建成功！" -ForegroundColor Green
Write-Host "📦 正在复制构建产物..." -ForegroundColor Yellow

# 2. 删除旧的构建文件
Remove-Item -Path "assets", "data", "pdf" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "*.html" -Exclude "README*" -Force -ErrorAction SilentlyContinue

# 3. 复制新的构建产物
Copy-Item -Path "dist\*" -Destination "." -Recurse -Force

# 4. 显示完成信息
Write-Host "✅ 部署准备完成！" -ForegroundColor Green
Write-Host ""
Write-Host "现在请运行以下命令提交并推送：" -ForegroundColor Cyan
Write-Host "  git add -A" -ForegroundColor White
Write-Host "  git commit -m 'build: 重新构建部署'" -ForegroundColor White
Write-Host "  git push" -ForegroundColor White
Write-Host ""
Write-Host "或者直接运行：" -ForegroundColor Cyan
Write-Host "  git add -A && git commit -m 'build: 重新构建部署' && git push" -ForegroundColor White
