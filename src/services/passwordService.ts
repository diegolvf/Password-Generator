export interface PasswordOptions {
    //Cada interrogação indica que as propriedades são opcionais.
    length?: number; //Tamanho da senha.
    uppercase?: boolean; //Se deve incluir letras.
    numbers?: boolean; //Se deve incluir números.
    symbols?: boolean; //Se deve incluir símbolos ou caracteres especiais.
}
//exportFunction exporta a função como padrão. Se nenhum valor for passado a senha terá 8 caracteres, com maísculas, números e símbolos ativados.
export default function generatePass({ 
    length = 8,
    uppercase = true,
    numbers = true,
    symbols = true,
}: PasswordOptions = {}) { //garante que a função funcione mesmo se chamada sem nenhum argumento.
    let password: string = ''; //inicializa a variável password vazia.

        let characters: string = 'abcdefghijklmnopqrstuvwxyz'; //por padrão a senha sempre terá letras minúsculas.
        if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (numbers) characters += '0123456789';
        if (symbols) characters += '!@#$%^&*()_+-=[]{}|;:,.<>/?~';
        //if Verifica cada opção booleana e concatena no conjunto characters o grupo correspondente:.
        //usa o laço for baseado no tamanho do length para sortear os caracteres, usando a função Math.random
        for (let index = 0; index < length; index++) {
            password += characters .charAt(Math.floor(Math.random() * characters.length));
        }
        // Math.random() gera um número decimal aleatório entre 0 e 1 e multiplica pelo número total de caracteres disponíveis (characters.length).
        //Math.floor() arredonda o valor para baixo para obter um índice inteiro válido.
        //.charAt(...) pega o caractere daquela posição e adiciona à string password. Ao final a senha é gerada.

        return password;
}