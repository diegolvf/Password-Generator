import { useState } from 'react';
import{ View, Button, Pressable, Text } from 'react-native';
import{ styles } from './ButtonPassStyles';
import { TextInputPass } from '../TextInputPass/TextInputPass';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard'

export function ButtonPass(){
        const [senha, setSenha] = useState('');
        function handleGenButton(){
        let senhaFinal = generatePass();
        setSenha(senhaFinal);
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(senha);
    }

    return(
        <View>
            <TextInputPass pass={senha}/>
            <Pressable style={styles.button} onPress={handleGenButton}>
                <Text style={styles.text}>Gerar Password</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={handleCopyButton}>
                <Text style={styles.text}>Copiar</Text>
            </Pressable>

            {/*Componente button*/}
            {/*<Button title='Gen Password'>
            </Button>*/}         
        </View>
    )
}