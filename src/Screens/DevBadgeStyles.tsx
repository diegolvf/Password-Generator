import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021412',
    },
    content: {
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 40,
        paddingHorizontal: 20,
    },

    // Cabeçalho
    titulo: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#5aa9ff',
    },
    linhaTitulo: {
        height: 2,
        width: 220,
        backgroundColor: '#3fb950',
        marginTop: 6,
        marginBottom: 12,
    },
    status: {
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 16,
    },
    online: {
        color: '#3fb950',
        fontWeight: 'bold',
    },

    // Logo
    logoContainer: {
        backgroundColor: '#1c2326',
        borderRadius: 60,
        padding: 12,
    },
    logo: {
        width: 96,
        height: 96,
        borderRadius: 48,
    },
    dica: {
        color: '#8b949e',
        fontSize: 12,
        marginTop: 10,
        marginBottom: 20,
    },

    // Campo de nome e botão
    input: {
        width: '100%',
        backgroundColor: '#161b22',
        color: '#ffffff',
        borderWidth: 1,
        borderColor: '#5aa9ff',
        borderRadius: 8,
        padding: 12,
        fontSize: 14,
    },
    botaoContainer: {
        width: '100%',
        marginTop: 16,
        marginBottom: 24,
    },

    // Switch do modo admin
    cardSwitch: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#161b22',
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    textoSwitch: {
        color: '#ffffff',
        fontSize: 16,
    },

    // Selo (muda conforme o switch)
    selo: {
        marginTop: 20,
        marginBottom: 12,
        borderWidth: 1,
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    seloAdmin: {
        borderColor: '#3fb950',
    },
    seloBasico: {
        borderColor: '#555555',
    },
    seloTexto: {
        fontSize: 13,
        fontWeight: 'bold',
    },
    seloTextoAdmin: {
        color: '#3fb950',
    },
    seloTextoBasico: {
        color: '#9ca3af',
    },

    // Lista de elementos
    elemento: {
        width: 135,
        alignItems: 'center',
        paddingVertical: 22,
        marginTop: 10,
        backgroundColor: '#161b22',
        borderWidth: 1,
        borderColor: '#5aa9ff',
        borderRadius: 10,
    },
    elementoPressionado: {
        backgroundColor: '#1f2a36',
    },
    elementoTexto: {
        color: '#5aa9ff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;