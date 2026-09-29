export default function generatePass(){
    let password: string= '';
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?~';

    //tamanho da senha:
    let passwordLength =  8;

    for(let index = 0 ; index < passwordLength; index++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
        //Math.floor arrendonda o valor da senha para um número inteiro.
    }

    return password;
}