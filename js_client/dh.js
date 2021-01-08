//dh.js
const BigMath ={
    pow(num, pow){
        let total;
        for(let i = 0; i < pow; i++){
            if(!total) total = num;
            else total = total * num;
        }
        return total;
    }
} 

function Dh(q=97n, a=5n){
    this.q = q;//����q
    this.a = a;//q��ԭ��a
    this.x = 0n;//˽Կ
    this.Y1 = 0n;//�Լ���Կ
    this.Y2 = 0n;//�Է���Կ
    this.generatePrik();
    this.generatePubk();
}

Dh.prototype.ExchangePubk =function(key){
    this.Y2 = BigInt(key);
}

Dh.prototype.ShareKey =function(){
    k = BigMath.pow(this.Y2, this.x);
    k = k % this.q;
    return parseInt(BigInt.asUintN(64, k));
}

Dh.prototype.PubKey =function(){
    return parseInt(BigInt.asUintN(64, this.Y1));
}

Dh.prototype.generatePrik = function(){
    this.x = BigInt(Math.floor(Math.random()*10000000))%this.q;
    this.x = this.x + 1n;
}

Dh.prototype.generatePubk = function(){
    this.Y1 = BigMath.pow(this.a, this.x);
    this.Y1 = this.Y1 % this.q;
}

var key = new Dh();
module.exports=Dh;
module.exports.key =key;