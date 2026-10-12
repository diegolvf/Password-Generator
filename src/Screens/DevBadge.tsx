import { useState } from 'react';
import {View, Text, TextInput, Button, Switch, ScrollView, Alert, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import styles from './DevBadgeStyles';

export default function DevBadge() {
    const [nome, setNome] = useState('');
    const [admin, setAdmin] = useState(false);

    function registrarCredencial() {
        if (nome.trim() === '') {
            Alert.alert('Atenção', 'Digite seu nome de desenvolvedor');
            return;
        }
        Alert.alert(
            'Credencial registrada',
             `Bem -vindo(a), ${nome}!\nNível de acesso: ${admin ? 'Total (Admin)' : 'Básico'}`
        );
    }

    function mostrarDicas() {
        Alert.alert('Dicas', 'Digite seu nome, escolha  o nível de acesso e registre a sua credencial.')
    }
    return (
        <View style={styles.container}>
            <StatusBar style='light'/>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.titulo}>DevBadge Profile</Text>
                <View style={styles.linhaTitulo}/>

                <Text style={styles.status}>
                    Status do Sistema: <Text style={styles.online}>online</Text>
                </Text>
                <Pressable onLongPress={mostrarDicas} style={styles.logoContainer}>
                    <Image source={require('../../assets/Randy Marsh.png')} style={styles.logo}/>
                </Pressable>
                <Text style={styles.dica}>(Pressione e segure para mais dicas)</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome de desenvolvedor..."
                    placeholderTextColor="#6b7785"
                    value={nome}
                    onChangeText={setNome}
                />

                <View style={styles.cardSwitch}>
                    <Text style={styles.textoSwitch}>Ativar Modo Admin?</Text>
                    <Switch value={admin}
                        onValueChange={setAdmin}
                        trackColor={{ false: '#444444', true: '#3fb950'}}
                        thumbColor="#ffffff"
                    />
                </View>

                <View style={[styles.selo, admin ?  styles.seloAdmin : styles.seloBasico]}>
                    <Text style={[styles.seloTexto, admin ? styles.seloTextoAdmin : styles.seloTextoBasico]}>
                        {admin ? 'Acesso Total (Admin)' : 'Acesso Básico'}
                    </Text>
                </View>
                {[1, 2, 3, 4, 5, 6].map((n) =>(
                    <Pressable
                    key={n}
                    style={({ pressed }) => [styles.elemento, pressed && styles.elementoPressionado]}
                    onPress={() =>  Alert.alert(`Elemento ${n}`, 'Você tocou nesse elemento.')}
                    onLongPress={() =>  Alert.alert(`Elemento ${n}`, 'Voce segurou este elemento.')}>
                        <Text style={styles.elementoTexto}>Elemento {n}</Text>
                    </Pressable>
                ))}
            </ScrollView>
        </View>
    );
}