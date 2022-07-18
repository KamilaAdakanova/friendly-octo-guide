export default new class LocalHelper {
    generateRandomPassword = (numberOfChar = 8)=>{
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*123456789';
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        const capitalLet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const characters = '!@#$%^&*';
        const numbers = '123456789';
        let pass = '';
        let obj = {
            l: 0,
            k: 0,
            c: 0,
            n: 0
        };
        for(let i = 0; i < numberOfChar; i++){
            let index = Math.floor(Math.random()*chars.length);
            let char = chars[index];
            if(letters.includes(char)&& obj.l < Math.trunc(numberOfChar/4)){
                pass += char
                obj.l++;
            }
            if(capitalLet.includes(char)&& obj.k < Math.trunc(numberOfChar/4)){
                pass += char
                obj.k++;
            }
            if(characters.includes(char)&&obj.c < Math.trunc(numberOfChar/4)){
                pass += char
                obj.c++;
            }
            if(numbers.includes(char)&&obj.n < Math.trunc(numberOfChar/4)){
                pass += char
                obj.n++;
            }
        }
        if(obj.l === 0){
            pass += letters[Math.floor(Math.random()*letters.length)]
        }
        if(obj.k === 0){
            pass += capitalLet[Math.floor(Math.random()*capitalLet.length)]
        }
        if(obj.c === 0){
            pass += characters[Math.floor(Math.random()*characters.length)]
        }
        if(obj.n === 0){
            pass += Math.floor(Math.random()*10)
        }
        let dif = numberOfChar - pass.length;
        for(let i = 0; i < dif; i++){
            let indexS = Math.floor(Math.random()*chars.length);
            pass += chars[indexS]
        }
        return pass;
    }
}