import { StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        alignItems: 'center',
    },

    backheader: {
        width: '100%',
        height: '30%',
        backgroundColor: '#FF5300',
        padding: 20,
        borderBottomLeftRadius: 85,
        borderBottomRightRadius: 85,
        position: 'absolute',
    },

    imghome: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },

    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
    },

    nameuser: {
        color: 'black',
        fontSize: 28,
        position: 'relative',
        paddingTop: 130,
        color: '#fff',
        fontFamily: 'Montserrat_400Regular',
    },

    ResumoSaldo: {
        backgroundColor: '#fff',
        width: '80%',
        height: '50%',
        borderRadius: 30,
        paddingTop: 30,
        marginTop: 15,
        paddingLeft: 30,

        shadowColor: 'black',
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 5 
    },

    VerifAccount: {
       position: 'relative',
       marginTop: 450,
    },

    verifique: {
        flexDirection: 'row',                
        alignItems: 'center',               
        width: '70%',
        borderBottomWidth: 0.5,               
        borderBottomColor: '#FF5300',         
        paddingBottom: 20,
    },

    seta: {
        marginLeft: 10, 
        paddingTop: 450,                    
      },


    
})
