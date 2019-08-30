pbjs -t static-module -o client.js client.proto

https://segmentfault.com/a/1190000012820412

js的protobuf有一点特别注意，proto文件最好写同一个文件里面，应为加载到工程的pb js只有一份，root相互替换
