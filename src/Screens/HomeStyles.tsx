import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center'
    },

    logoContainer:{
        flexDirection:'column',
        borderColor:'#009dff',
        justifyContent:'center',
        alignSelf: 'center',
        marginBottom: 10,
        paddingTop: 20,
        paddingBottom: 10,
    },

    buttonContainer:{
        width:'80%',
        flexDirection: 'column'
    }
});

export default styles;