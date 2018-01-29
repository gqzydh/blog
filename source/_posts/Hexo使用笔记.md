---
title: Hexo使用笔记
date: 2017-10-12 09:58:03
tags:
- Hexo
categories:
- Hexo
---

## Hexo新建笔记 ##

```
npm install hexo -g  //安装  
npm update hexo -g 	//升级 
hexo version  	//查看hexo的版本
hexo init nodejs-hexo   //创建nodejs-hexo 名字的本地文件
hexo init nodejs-hexo    //创建博客
hexo init blog   //初始化，生成文件夹为blog
cd blog  	//进入blog文件夹
npm install     //安装依赖库
hexo generate   //生成一套静态网页
hexo server  //运行测试,浏览器打开地址，http://localhost:4000/
hexo deploy   //进行部署。

hexo new "new article"  //新建文章‘new article’
```

<!-- more -->

>> 新建的笔记文件路径：` source/_posts` 目录下, `new-article.md` 的文件, 打开文件, 文件开头采用的是yaml格式，用三条短横线分隔。下面是文章正文，采用用的是markdown格式。

>> ####新建、删除或修改文章后，不需要重启hexo server，刷新一下即可预览。####

## Hexo文章属性设置 ##

设置			描述			Default
layout		Layout		post或page
title		文章的标题	 
date		创建日期		文件的创建日期
updated		修改日期		文件的修改日期
comments	是否开启评论	true
tags		标签	 
categories	分类	 
permalink	url中的名字	文件名

## Hexo摘要 ##
```
这里是文章的摘要部分<!--more-->后面才是文章的正文内容
```

## layout ##
如果你修改了layout，在`scaffolds`文件夹里一定要有名字对应的模版文件，否则会采用默认模版。

## Hexo草稿 ##
草稿相当于很多博客都有的“私密文章”功能。
```
$ hexo new draft "new draft"
```
草稿会在`source/_drafts`目录下生成一个`new-draft.md`文件。但是这个文件不被显示在页面上，链接也访问不到。也就是说如果你想把某一篇文章移除显示，又不舍得删除，可以把它移动到`_drafts`目录之中。

如果你希望强行预览草稿，更改配置文件：
```
render_drafts: true
```
或者，如下方式启动预览：
```
$ hexo server --drafts
```
下面这条命令可以把草稿变成文章，或者页面：
```
$ hexo publish [layout] <filename>
```

## 找不到git部署 ##
ERROR Deployer not found: git
解决方法：npm install hexo-deployer-git --save 

## hexo更换皮肤 ##
1. [hexo官网选择皮肤:](https://hexo.io/themes/)  `git clone` 
2. 放到themes目录下
3. 编辑文件_config.yml，找到theme一行，改成 theme: pacman
4. 本地启动hexo服务器，打开浏览器 http://localhost:4000


