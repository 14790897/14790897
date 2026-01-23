// 使用 Puppeteer 生成带可点击链接的 PDF
// 安装依赖: npm install puppeteer
// 运行: node generate-pdf.js

const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // 设置视口大小
  await page.setViewport({ width: 1200, height: 1600 });
  
  // 加载本地 HTML 文件
  const htmlPath = path.join(__dirname, 'index-hardware.html');
  await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });
  
  // 等待页面完全渲染
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 生成 PDF，保留链接
  await page.pdf({
    path: 'resume-hardware.pdf',
    format: 'A4',
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: false,
    margin: {
      top: '1cm',
      right: '1cm',
      bottom: '1cm',
      left: '1cm'
    }
  });
  
  console.log('PDF 生成成功: resume-frontend.pdf');
  await browser.close();
})();
