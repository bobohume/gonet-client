/* crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */
/* vim: set ts=2: */
/*exported CRC32 */
class crc{
    version : "1.2.0"
    static table : {}

    constructor(){
        crc.init()
    }

    static init():void{
        var c = 0;
        this.table = new Array(256);
        for(var n =0; n != 256; ++n){
            c = n;
            c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
            c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
            c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
            c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
            c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
            c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
            c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
            c = ((c&1) ? (-306674912 ^ (c >>> 1)) : (c >>> 1));
            this.table[n] = c;
        }
    }

    bstr(bstr : string, seed : number) :number{
        var C = seed ^ -1, L = bstr.length - 1;
        for(var i = 0; i < L;) {
            C = (C>>>8) ^ crc.table[(C^bstr.charCodeAt(i++))&0xFF];
            C = (C>>>8) ^ crc.table[(C^bstr.charCodeAt(i++))&0xFF];
        }
        if(i === L) C = (C>>>8) ^ crc.table[(C ^ bstr.charCodeAt(i))&0xFF];
        return C ^ -1;
    }

    buf(buf : Uint8Array, seed : number) :number{
        if(buf.length > 10000) return this.buf8(buf, seed);
        var C = seed ^ -1, L = buf.length - 3;
        for(var i = 0; i < L;) {
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
        }
        while(i < L+3) C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
        return C ^ -1;
    }

    buf8(buf : Uint8Array, seed: number) :number{
        var C = seed ^ -1, L = buf.length - 7;
        for(var i = 0; i < L;) {
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
            C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
        }
        while(i < L+7) C = (C>>>8) ^ crc.table[(C^buf[i++])&0xFF];
        return C ^ -1;
    }

    str(str : string, seed : number = 0xFFFFFFFF) : number {
        var C = seed ^ -1;
        for(var i = 0, L=str.length, c, d; i < L;) {
            c = str.charCodeAt(i++);
            if(c < 0x80) {
                C = (C>>>8) ^ crc.table[(C ^ c)&0xFF];
            } else if(c < 0x800) {
                C = (C>>>8) ^ crc.table[(C ^ (192|((c>>6)&31)))&0xFF];
                C = (C>>>8) ^ crc.table[(C ^ (128|(c&63)))&0xFF];
            } else if(c >= 0xD800 && c < 0xE000) {
                c = (c&1023)+64; d = str.charCodeAt(i++)&1023;
                C = (C>>>8) ^ crc.table[(C ^ (240|((c>>8)&7)))&0xFF];
                C = (C>>>8) ^ crc.table[(C ^ (128|((c>>2)&63)))&0xFF];
                C = (C>>>8) ^ crc.table[(C ^ (128|((d>>6)&15)|((c&3)<<4)))&0xFF];
                C = (C>>>8) ^ crc.table[(C ^ (128|(d&63)))&0xFF];
            } else {
                C = (C>>>8) ^ crc.table[(C ^ (224|((c>>12)&15)))&0xFF];
                C = (C>>>8) ^ crc.table[(C ^ (128|((c>>6)&63)))&0xFF];
                C = (C>>>8) ^ crc.table[(C ^ (128|(c&63)))&0xFF];
            }
        }
        return C ^ -1;
    }
}

var CRC32 = new crc();