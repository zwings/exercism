class RotationalCipher{
    constructor(){
    }
    rotate(chr,num){
        var arr = chr.split("");
        const numArr = arr.map((e)=>{
            if (e.charCodeAt(0) >= 32 && e.charCodeAt(0) <= 63){
                return e;
            }
            if (e >= "A" && e <= "Z") {
                e = e.charCodeAt(0) - 65;
                e = (e + num)%26;
                return e = String.fromCharCode((e+65));
            }
            else if (e >= "a" && e <= "z") {
                e =  e.charCodeAt(0) - 97;
                e = (e + num)%26;
                e = String.fromCharCode((e+97));
                return (e);
            };
        });
        var result = numArr.join("");
        return result;
    }
}

module.exports = RotationalCipher;




