class VigenereCipheringMachine {
    constructor (val){
        this.val = val;
    }
    encrypt (message, key) {
        if(!message||!key){
            throw new Error();
    }
    let mes = message.toUpperCase();
    let keyword = key.toUpperCase();
    let result = '';
    
}

    decrypt (message,key) {
        if(!message||!key){
            throw new Error();
    }
    let mes = message.toUpperCase();
    let keyword = key.toUpperCase();
    let result = '';
}
}
module.exports = VigenereCipheringMachine;
