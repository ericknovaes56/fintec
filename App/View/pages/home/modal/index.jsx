import { View , Text, StyleSheet,TextInput, TouchableOpacity} from "react-native";

import Noticias from "../noticias";

export default function ModalNoticias({close}){

    return (
        <View style={styles.modalc } tran>
            <View style={styles.back}>
                <TouchableOpacity style={styles.backbtn} onPress={close}>
                    <Text>
                        VOLTAR
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingBottom:100}}>
                <Noticias/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    back:{
        marginTop:80,
        backgroundColor:"#820AD1",
        width:'100%',
        height:100,
        justifyContent:'center',
        paddingLeft:20
    },
    backbtn:{
        marginTop:20,
        backgroundColor:"white",
        width:110,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:999

    },
    modalc:{
        backgroundColor: "#131313",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    oqfazer:{
        color:'black',
        fontSize:20,
        textAlign:'center',
        textTransform:"uppercase",
        fontWeight:'bold'
        
        
    },
    oqfazer2:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        textTransform:"uppercase",
        fontWeight:'bold'
        
        
    },
    link:{
        color:'white',
        fontSize:20,
        textAlign:'center',
        backgroundColor:'black',
        paddingTop:20,
        paddingBottom:20,
        borderRadius: 20,
        minWidth:350
        
    },
    texts:{
        gap:10,
    },
    input:{
        fontSize:20,
        backgroundColor: "#ffff",
        width: '95%',
        height: 50,
        borderRadius: 10,
        paddingLeft: 20,
    },
    divbtn:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        width: '95%',
        height: 50,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
    },
    btn:{
        backgroundColor: "#FFF",
        flex:1,
        borderRadius:999,
        minWidth:100,
        height:40,
        justifyContent: "center",
        alignItems: "center",
    }
})