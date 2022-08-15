# 祖安语录API

## 这玩意是干啥的？
随机输出一句祖安语录，对对方的双亲进行降维打击。

## 搭建教程
### 下载链接

Github仓库：[avalonsky-user/FUCK-API (github.com)](https://github.com/avalonsky-user/FUCK-API)

### 效果展示

JSON版：[https://fuck-lite.ctexcel.click/api/v1/aword/lite](https://fuck-lite.ctexcel.click/api/v1/aword/lite)

纯文字版：[https://fuck-lite.ctexcel.click/api/v1/aword/lite?return=txt](https://fuck-lite.ctexcel.click/api/v1/aword/lite?return=txt)

### 如何使用

首先，去GitHub给全部源码下载下来，记住你下载到哪里去了，后面需要用。

你愿意用

```
git clone https://github.com/avalonsky-user/FUCK-API.git
```

还是

```
wget https://github.com/avalonsky-user/FUCK-API/releases/download/New/v0.1.zip
```

都无所谓，反正能跑起来就行。

然后去宝塔应用商店安装Node.js管理器，并且在里面安装Node v16.0.0（测试版）。

![](https://s3jp.blob.core.windows.net/oss/photos/Snipaste_08-15_12-31-04.png)

再去网站里添加一个新Node项目。然后按照下图填写（自己修改项目文件目录）

![](https://s3jp.blob.core.windows.net/oss/photos/Snipaste_08-15_12-37-41.png)

运行命令写：node main.js

![](https://s3jp.blob.core.windows.net/oss/photos/Snipaste_08-15_12-39-03.png)

域名映射里添加你要用的域名。

![](https://s3jp.blob.core.windows.net/oss/photos/Snipaste_08-15_12-40-13.png)

SSL自己添加。

![](https://s3jp.blob.core.windows.net/oss/photos/Snipaste_08-15_12-40-52.png)

### 词库设置

来到 项目目录/app/aword 下，可以发现有两个文件，其中config.json是词库配置文件。

```
[{"type":"lite","content":"zuan.txt"}]
```

可以看出 lite 是词库名称 zuan.txt是词库文件，lite对应着访问链接里的 https://fuck-lite.ctexcel.click/api/v1/aword/lite 最后的lite。

词库需要按照以下格式书写：

```
[{"txt":"词库1？","author":"前人"},{"txt":"词库2","author":"前人"},{"txt":"词库3","author":"前人"}]
```
