class VigenereCipheringMachine {
    constructor (reverse){
        this.reverse = reverse;
    }
    encrypt = (message, key) => {
        if(!message||!key){
            throw new Error();
    }
    let mes = message.toUpperCase();
    let mesArr = mes.split('');
    let keyword = key.toUpperCase();
    let keyArr = keyword.split('');
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    keyArr = keyArr.map((val)=>alphabet.findIndex((v)=>v === val));
    let keyInd = 0;
    const newWord = mesArr.map((val, i)=>{
    const letInd =alphabet.findIndex((v)=>v === val);
    if (keyInd >= keyArr.length) {
        keyInd = 0;
    }
    if (letInd != -1) {
        let newInd = letInd + keyArr[keyInd];
        keyInd=keyInd+1;
        if (newInd >= alphabet.length) {
            newInd = newInd % alphabet.length;
        }
        return alphabet[newInd];
    }
    return val;
    });
    let word = newWord.join('')
    if (this.isReverse) {
        return word.reverse();
    }
        return word;
   }
   
    
   decrypt = (message, key) => {
    if(!message||!key){
        throw new Error();
}

    let mes = message.toUpperCase();
    let mesArr = mes.split('');
    let keyword = key.toUpperCase();
    let keyArr = keyword.split('');
    let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    keyArr = keyArr.map((val)=>alphabet.findIndex((v)=>v === val));
    let keyInd = 0;
    const newWord = mesArr.map((val, i)=>{
    const letInd =alphabet.findIndex((v)=>v === val);
    if (keyInd >= keyArr.length) {
        keyInd = 0;
    }
    if (letInd != -1) {
        let newInd = Math.abs(letInd + alphabet.length - keyArr[keyInd]);
        keyInd=keyInd+1;
        if (newInd >= alphabet.length) {
            newInd = newInd % alphabet.length;
        }
        return alphabet[newInd];
    }
    return val;
    });
    let word = newWord.join('')
    if (this.isReverse) {
        return word.reverse();
    }
     return word;
   }
} 
module.exports = VigenereCipheringMachine;
