https://segmentfault.com/a/1190000012820412

2 安装protobufjs
 npm install protobufjs -g
 3 proto文件转js
pbjs -t static-module -o game.js game.proto

4 js转ts文件
pbts  -o game.d.ts game.js

game.d.ts 添加 type Long = $protobuf.Long

5 protobuf文件安装
 建立src\script\Protobuf文件夹，奖protobufjs的dist\minimal文件夹下的四个文件拷贝到Protobuf文件夹下，将上面生成的bundle.d.ts和bundlel.js文件拷贝到Protobuf文件夹下。
 这时会发现报错。你会发现报错了。

在game.d.ts文件的第一行，把protobufjs改成./protobuf


js的protobuf有一点特别注意，proto文件最好写同一个文件里面，应为加载到工程的pb js只有一份，root相互替换
