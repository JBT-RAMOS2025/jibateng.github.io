# JBT-RAMOS 宣传网站

🚀 **登上太阳的超级PE系统宣传网站！**

## 项目简介

这是一个为 JBT-RAMOS PE系统打造的超级炫酷宣传网站。JBT-RAMOS 是一个基于 Windows 的 PE（预安装环境）和 RAMOS（内存操作系统）项目，具有以下特点：

- ⚡ **光速启动** - 全内存运行，秒杀传统PE
- 🛡️ **安全防护** - 重启即还原，病毒无法侵入
- 📦 **体积小巧** - ISO镜像不到1GB，内存占用仅1.9GB
- 💎 **功能完整** - Windows 11内核，支持触屏
- 🆓 **完全免费** - 永久免费，无广告，无捆绑

## 文件结构

```
jbt-ramos-website/
├── index.html      # 主页HTML文件
├── style.css       # 样式表文件
├── script.js       # JavaScript交互文件
└── README.md       # 说明文档
```

## 使用方法

1. **本地预览**
   - 直接双击 `index.html` 文件即可在浏览器中打开
   - 或使用本地服务器（如 Live Server）预览

2. **部署到服务器**
   - 将所有文件上传到你的域名 `jbt-ramos.top` 的 web 服务器
   - 确保 index.html 是网站根目录的默认文件
   - 设置正确的 MIME 类型（通常服务器会自动配置）

3. **使用 GitHub Pages**
   - 创建一个 GitHub 仓库
   - 上传所有文件
   - 在仓库设置中启用 GitHub Pages
   - 绑定你的自定义域名 `jbt-ramos.top`

## 网站特性

### 🎨 设计特点
- 科技感十足的深色主题
- 炫酷的粒子背景效果
- 流畅的滚动动画
- 响应式设计，支持移动端
- Glitch 故障艺术效果

### 🚀 功能特性
- 平滑滚动导航
- 交互式3D卡片效果
- 动态数字统计
- 回到顶部按钮
- 彩蛋：Konami Code（↑↑↓↓←→←→BA）
- 性能优化的滚动处理

### 📱 响应式设计
- 完美适配桌面端（1920px+）
- 平板端（768px-1024px）
- 移动端（<768px）

## 技术栈

- **HTML5** - 语义化结构
- **CSS3** - 现代化样式和动画
- **JavaScript (ES6+)** - 交互功能
- **Particles.js** - 粒子背景效果

## 外部依赖

- [Particles.js](https://vincentgarreau.com/particles.js/) - 粒子背景效果库（通过CDN引入）

## 浏览器兼容性

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 性能优化

- 使用 CSS 动画代替 JavaScript 动画
- 防抖函数优化滚动性能
- Intersection Observer API 实现懒加载动画
- 压缩和优化资源

## 自定义修改

### 修改颜色主题

在 `style.css` 文件顶部的 `:root` 中修改 CSS 变量：

```css
:root {
    --primary-color: #00ff88;    /* 主色调 */
    --secondary-color: #0088ff;  /* 次色调 */
    --accent-color: #ff0088;     /* 强调色 */
    --dark-bg: #0a0a0f;          /* 深色背景 */
    --card-bg: #1a1a2e;          /* 卡片背景 */
}
```

### 修改内容

直接编辑 `index.html` 文件中的文本内容即可。

### 添加新功能

在 `script.js` 文件中添加你的自定义 JavaScript 代码。

## 部署建议

### Nginx 配置示例

```nginx
server {
    listen 80;
    server_name jbt-ramos.top www.jbt-ramos.top;
    root /var/www/jbt-ramos;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }

    # 启用 Gzip 压缩
    gzip on;
    gzip_types text/css application/javascript text/html;
    gzip_min_length 256;
}
```

### Apache .htaccess 配置

```apache
# 启用压缩
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>

# 缓存控制
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 1 hour"
</IfModule>
```

## SEO 优化建议

1. 添加 sitemap.xml
2. 添加 robots.txt
3. 配置 Google Analytics
4. 添加结构化数据（Schema.org）
5. 优化页面加载速度

## 常见问题

**Q: 粒子效果不显示？**
A: 检查是否正确加载了 particles.js CDN 资源，确保网络连接正常。

**Q: 动画效果卡顿？**
A: 可能是设备性能问题，可以在 script.js 中减少粒子数量或禁用某些动画。

**Q: 移动端显示异常？**
A: 清除浏览器缓存，确保使用最新版本的浏览器。

## 项目链接

- 🌐 [JBT-RAMOS 官网](https://jbt-ramos.github.io/)
- 📺 [B站视频教程](https://www.bilibili.com/video/BV1Gz411v7jA/)
- 💻 [GitHub 项目](https://github.com/jbt-ramos)

## 许可证

本网站代码采用 MIT 许可证。

JBT-RAMOS 项目本身由其原作者维护和授权。

## 声明

- 本项目仅用于学习和宣传目的
- JBT-RAMOS 是完全免费的开源项目
- 所有 Windows 相关商标归 Microsoft 所有
- 禁止将本项目用于任何商业用途

## 致谢

感谢 JBT-RAMOS 项目的作者和所有贡献者！

---

**🚀 祝你使用愉快，一起登上太阳！☀️**

Made with ❤️ for JBT-RAMOS Community
