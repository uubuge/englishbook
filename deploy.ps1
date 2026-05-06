Write-Host "🚀 开始构建并部署..." -ForegroundColor Green

npm run deploy

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 部署失败！" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "✅ 部署成功！构建产物已推送到 gh-pages 分支" -ForegroundColor Green
Write-Host "🌐 请等待几分钟，GitHub Pages 会自动更新" -ForegroundColor Cyan
