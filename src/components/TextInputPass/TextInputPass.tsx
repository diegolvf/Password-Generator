import { View, TextInput, KeyboardTypeOptions } from 'react-native';
import { styles } from './TextInputPassStyles';

interface TextInputProps{
    pass:string, //pass (obrigatória): A string que representa o valor atual digitado no campo (controlada pelo componente pai).
    placeholder?: string, //(opcional): Texto exibido no campo quando ele está vazio.
    onChangeText?: (text: string) => void, //(opcional): Função de callback acionada sempre que o usuário altera o texto.
    keyboardType?: KeyboardTypeOptions, //(opcional): Define o tipo de teclado virtual exibido ao focar no campo.
    maxLength?: number, //(opcional): Limite máximo de caracteres permitidos no campo.
}

export function TextInputPass(props:TextInputProps){
    return(
        <>
            <TextInput
                placeholder={props.placeholder ?? 'password'}
                onChangeText={props.onChangeText}
                keyboardType={props.keyboardType}
                style={styles.inputer}
                value={props.pass}
            >                
            </TextInput>
        </>
    )
}