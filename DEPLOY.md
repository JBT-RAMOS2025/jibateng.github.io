# 🚀 JBT-RAMOS 网站快速部署指南

## 方案一：使用 NameSilo + GitHub Pages（推荐）

### 步骤 1：上传到 GitHub

1. 在 GitHub 创建新仓库（比如：`jbt-ramos-site`）
2. 解压 `jbt-ramos-website.zip`
3. 将所有文件上传到仓库

### 步骤 2：启用 GitHub Pages

1. 进入仓库的 Settings → Pages
2. Source 选择 `main` 分支
3. 点击 Save

### 步骤 3：绑定域名

1. 在 NameSilo 的 DNS 管理中添加记录：
   ```
   类型: CNAME
   主机名: www
   值: your-username.github.io
   ```

2. 在 NameSilo 的 DNS 管理中添加 A 记录（用于裸域名）：
   ```
   类型: A
   主机名: @
   值: 185.199.108.153
   值: 185.199.109.153
   值: 185.199.110.153
   值: 185.199.111.153
   ```

3. 在 GitHub Pages 设置中填入自定义域名：`jbt-ramos.top`

4. 等待 DNS 生效（可能需要几小时）

5. 完成！访问 https://jbt-ramos.top 即可

---

## 方案二：使用虚拟主机/VPS

### 步骤 1：上传文件

1. 解压 `jbt-ramos-website.zip`
2. 使用 FTP/SFTP 上传所有文件到服务器的 web 根目录
   - 通常是 `/var/www/html` 或 `/home/username/public_html`

### 步骤 2：配置 DNS

1. 在 NameSilo 的 DNS 管理中添加 A 记录：
   ```
   类型: A
   主机名: @
   值: 你的服务器IP地址
   ```

2. 添加 www 子域名：
   ```
   类型: CNAME
   主机名: www
   值: jbt-ramos.top
   ```

### 步骤 3：配置 Web 服务器

**Nginx 配置示例：**

```nginx
server {
    listen 80;
    server_name jbt-ramos.top www.jbt-ramos.top;
    root /var/www/jbt-ramos;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

**Apache 配置示例：**

在 `.htaccess` 文件中添加：

```apache
DirectoryIndex index.html

<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

### 步骤 4：启用 HTTPS（推荐）

使用 Let's Encrypt 免费证书：

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d jbt-ramos.top -d www.jbt-ramos.top
```

---

## 方案三：使用 Cloudflare Pages（最简单）

### 步骤 1：注册 Cloudflare

1. 访问 https://pages.cloudflare.com/
2. 注册并登录

### 步骤 2：创建项目

1. 点击 "Create a project"
2. 选择 "Connect to Git" 或 "Direct Upload"
3. 如果选择 Direct Upload，直接拖入解压后的文件夹

### 步骤 3：绑定域名

1. 项目创建后，进入 Custom domains
2. 添加 `jbt-ramos.top`
3. 在 NameSilo 的 DNS 管理中修改 NameServer 为 Cloudflare 提供的
   - 或者添加 CNAME 记录指向 Cloudflare 提供的地址

### 步骤 4：完成

- 自动启用 HTTPS
- 自动 CDN 加速
- 访问 https://jbt-ramos.top 即可

---

## 常见问题

**Q: DNS 修改后多久生效？**
A: 通常 10 分钟到 48 小时，大部分情况下 1-2 小时内生效。

**Q: 如何检查 DNS 是否生效？**
A: 打开命令行，输入：
```bash
nslookup jbt-ramos.top
# 或
ping jbt-ramos.top
```

**Q: 网站打不开怎么办？**
A: 检查：
1. DNS 是否正确配置
2. 服务器是否正常运行
3. 防火墙是否开放 80/443 端口
4. 文件是否上传到正确的目录

**Q: 如何启用 HTTPS？**
A: 推荐使用 Let's Encrypt 免费证书，或使用 Cloudflare 的免费 HTTPS。

---

## 优化建议

### 1. 启用 Gzip 压缩

**Nginx:**
```nginx
gzip on;
gzip_types text/css application/javascript text/html;
gzip_min_length 256;
```

**Apache (.htaccess):**
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### 2. 设置缓存

**Nginx:**
```nginx
location ~* \.(css|js)$ {
    expires 1M;
    add_header Cache-Control "public, immutable";
}
```

**Apache (.htaccess):**
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### 3. 使用 CDN

推荐使用：
- Cloudflare（免费）
- 腾讯云 CDN
- 阿里云 CDN

---

## 需要帮助？

- 查看完整 README.md 文档
- 访问 JBT-RAMOS 官网：https://jbt-ramos.github.io/
- B站视频教程

**祝部署顺利！🚀**
