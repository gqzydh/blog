## 博客
- 前端开发




## Hexo
```
npm install hexo -g  //安装

npm install  //安装依赖库

hexo generate   //生成一套静态网页

hexo server  //运行测试

hexo deploy   //进行部署。
```

## 域名绑定
这里选择阿里云域名
1. 登陆阿里云控制台，选择域名，选择要绑定的域名，点解析
2. 解析页，添加记录，
    - 记录类型 `A`
    - 主机记录 `WWW`, `@`
    - 记录值  填写对应的github的ip地址  
3. Github的ip地址获取
    - clone 你创建的仓库, 用户名.github.io
    - 输入 `ping  www.用户名.github.io`
    - `Ping sni.github.map.fastly.net [151.202.68.147]`, IP地址
4. 在source目录下创建这个`CNAME`文件，输入域名
5. 提交代码，点击域名，一般很快就生效。

