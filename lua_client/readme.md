依赖库看这里，需要luarocks.lua5.3.pb依赖下面的github
luarocks install luasocket 安装socket模块
https://github.com/starwing/lua-protobuf

cl /O2 /LD /Fepb.dll /I "C:\Program Files (x86)\Lua\5.1\include" /I "C:\Program Files (x86)\Microsoft Visual Studio 12.0\VC\include" /DLUA_BUILD_AS_DLL pb.c "C:\Program Files (x86)\Lua\5.1\lib\lua51.lib" "C:\Program Files (x86)\Microsoft Visual Studio 12.0\VC\lib\LIBCMT.lib" "C:\Program Files (x86)\Microsoft Visual Studio 12.0\VC\lib\OLDNAMES.lib" "C:\Program Files (x86)\Microsoft SDKs\Windows\v7.1A\Lib\kernel32.lib"
