import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const aliceDir = '爱丽丝漫游奇遇记 (alice\'s adventures in wonderland)_001_中英_离线语音电脑';
const distDir = 'dist';

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.log(`⚠️  源目录不存在: ${src}`);
    return;
  }

  fs.mkdirSync(dest, { recursive: true });

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`✅ 已复制: ${entry.name}`);
    }
  }
}

console.log('\n📦 开始复制爱丽丝漫游奇遇记资源文件...\n');

const srcAliceDir = path.join(__dirname, aliceDir);
const distAliceDir = path.join(__dirname, distDir, aliceDir);

copyDir(srcAliceDir, distAliceDir);

console.log('\n✨ 资源文件复制完成！\n');
