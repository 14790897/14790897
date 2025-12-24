# 生成带可点击链接的 PDF 简历

## 方法一：使用 Puppeteer（推荐）

1. 安装 Node.js 和 Puppeteer：

```bash
pnpm add puppeteer
```

2. 运行生成脚本：

```bash
node generate-pdf.js
```

生成的 `resume-frontend.pdf` 会保留所有可点击的链接。

## 方法二：使用在线工具

访问以下任一网站，上传 HTML 文件生成 PDF：

- https://www.sejda.com/html-to-pdf
- https://cloudconvert.com/html-to-pdf
- https://www.ilovepdf.com/html-to-pdf

这些工具会保留 HTML 中的链接。

## 方法三：使用 Chrome 打印设置

在 Chrome 浏览器中：

1. 打开 `index-frontend.html`
2. 按 Ctrl+P 打开打印对话框
3. 选择"另存为 PDF"
4. 在"更多设置"中，确保勾选"背景图形"
5. 保存 PDF

注意：某些浏览器版本的打印功能可能无法完全保留链接的可点击性，推荐使用方法一或在线工具。
