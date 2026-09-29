import { useState } from 'react';
import{ View, Button, Pressable, Text, Switch } from 'react-native';
import{ styles, switchColors } from './ButtonPassStyles';
import { TextInputPass } from '../TextInputPass/TextInputPass';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard'

export function ButtonPass(){
        const [senha, setSenha] = useState('');
        const [tamanho, setTamanho] = useState('8');
        const [erro, setErro] = useState('');
        const [usarMaiusculas, setUsarMaiusculas] = useState(true);
        const [usarNumeros, setUsarNumeros] = useState(true);
        const [usarSimbolos, setUsarSimbolos] = useState (true);
        
        function handleGenButton(){
        const n = Number(tamanho);

        //validação: o TextInput sempre devolve texto, por isso number.
        if (!n || n < 4 || n > 64) {
            setErro('Digite um tamanho entre 4 e 64.');
            setSenha('');
            return;
        }

        setErro('');

        const senhaFinal = generatePass({
            length: n,
            uppercase: usarMaiusculas,
            numbers: usarNumeros,
            symbols: usarSimbolos,
        });
        setSenha(senhaFinal);
    }

    function handleCopyButton(){
        Clipboard.setStringAsync(senha);
    }

    return(
        <View>
            <TextInputPass pass={senha}/>

            <TextInputPass
                pass={tamanho}
                placeholder='Tamanho da senha'
                keyboardType='numeric'
                maxLength={2}
                onChangeText={(t) => setTamanho(t.replace(/[^0-9]/g, ''))}
            />
            {erro !== '' && <Text style={{ color: '#ff5555' }}>{erro}</Text>}

            <View style={styles.optionsContainer}>
                <View style={styles.row}>
                    <Text style={styles.label}>Maiúsculas:</Text>
                    <Switch style={styles.switchs}
                        value={usarMaiusculas}
                        onValueChange={setUsarMaiusculas}
                        trackColor={switchColors.track}
                        thumbColor={switchColors.thumb}
                    />
                </View>
                <View style = {styles.row}>
                    <Text style={styles.label}>Números:</Text>
                    <Switch style={styles.switchs}
                        value={usarNumeros}
                        onValueChange={setUsarNumeros}
                        trackColor={switchColors.track}
                        thumbColor={switchColors.thumb}
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Caracteres Especiais:</Text>
                    <Switch style={styles.switchs}
                        value={usarSimbolos}
                        onValueChange={setUsarSimbolos}
                        trackColor={switchColors.track}
                        thumbColor={switchColors.thumb}
                    />
                </View>
            </View>

            <Pressable style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleGenButton}>
                <Text style={styles.text}>Gerar Password</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleCopyButton}>
                <Text style={styles.text}>Copiar</Text>
            </Pressable>

            {/*Componente button*/}
            {/*<Button title='Gen Password'>
            </Button>*/}         
        </View>
    )
}