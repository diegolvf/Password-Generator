import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button:{
        marginTop:10,
        marginBottom: 2,
        alignItems:'center',
        width:'100%',
        justifyContent:'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#009de0',
    },

    buttonPressed: {
        backgroundColor: '#006b9e', // um tom mais escuro da cor acima
    },

    text:{
        fontSize:16,
        fontWeight:'bold',
        color:'#ffff'
    },

    label: {
        fontSize: 16,
        color: '#ffffff',
    },
    
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    switchs: {
        marginLeft: 10,
    },

    optionsContainer: {
        backgroundColor: '#161b22',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 12,
        borderWidth: 1,
        borderColor: '#0098f0', // opcional: combina com a borda dos seus inputs
    },
})

export const switchColors = {
    track: { false: '#444444', true: '#0098f0' },
    thumb: '#ffffff',
};