
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Modal,
    StatusBar
} from 'react-native'

import {React , useEffect, useState} from 'react'
import Noticias from './noticias'
import ModalNoticias from './modal'

StatusBar.setBarStyle('light-content');


const Home = () => {

    const [moeda, setMoeda] = useState(null)
    const [verModal, setModal] = useState(false)

    const ApiMoeda = async () =>{
        var result = await fetch('https://economia.awesomeapi.com.br/json/last/usd')
        result = await result.json()

        if (result){
            setMoeda(result.USDBRL)
        }


    }

    useEffect(()=>{
      
        ApiMoeda()
        
    }, [])

    return (
        <SafeAreaView style={{flex:1, paddingTop:40,gap:15, backgroundColor:'#131313'}}>
            <View style={styles.pai}>
                <View style={styles.top}>
                    <Text style={styles.total}>
                        Total: 
                    </Text>
                    <Text style={styles.valor}>
                        0,00
                    </Text>
                </View>
            </View>
            <View style={styles.paidolar}>
                <Text style={styles.wight}>
                    Cotação do dolar:
                </Text>
            </View>
            <View style={styles.paidolar}>
                <View style={styles.dolar}>
                    <Text style={styles.textomoeda}>
                        Baixa:
                    </Text>
                    <Text style={styles.moeda1}>
                        {moeda ? moeda.low : 'Esperando Net !'}
                    </Text>
                </View>
                <View style={styles.dolar}>
                    <Text style={styles.textomoeda}>
                        Alta:
                    </Text>
                    <Text style={styles.moeda}>
                        {moeda ? moeda.high : 'Esperando Net !'}
                    </Text>
                </View>
            </View>
            <View style={styles.paidolar}>
                <Text style={styles.wight}>
                    Notícias de Finanças
                </Text>
                <TouchableOpacity onPress={()=> setModal(true)}>
                    <Text  style={styles.wight}>
                        (ABRIR)
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ paddingBottom:380,}}>       
                <Noticias/>
            </View>
            <Modal visible={verModal} animationType='slide'>
                <ModalNoticias close={() => setModal(false)}/>
            </Modal>
        </SafeAreaView>
        

    )

}

const styles = StyleSheet.create({
    pai:{
        paddingRight:10,
        paddingLeft:10,
        gap:10

    },
    paidolar:{
        paddingRight:10,
        paddingLeft:10,
        gap:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    top: {
        width:'100%',
        height:200,
        backgroundColor:'#820AD1',
        borderRadius:20,
        justifyContent: 'center',
        padding:15,
    },
    total:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
        textTransform:'uppercase',
    },
    valor:{
        color:'white',
        fontSize:50,
        fontWeight:'bold',
        textTransform:'uppercase',
    },
    dolar:{
        flexDirection:'column',
        backgroundColor:'#20202b',
        borderRadius:15,
        height: 80,
        justifyContent:'center',
        padding:15,
        flex:1

    },
    moeda:{
        color:'#e74c3c',
        fontWeight:'bold',
        fontSize:20,
    },
    moeda1:{
        color:'#2ecc71',
        fontWeight:'bold',
        fontSize:20,
    },
    textomoeda:{
        color:'#a8a4a3',
        fontSize:10
    },
    wight:{
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'white'
    }

    
}) 

export default Home