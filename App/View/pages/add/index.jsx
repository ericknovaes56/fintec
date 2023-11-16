import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState , useEffect } from 'react'

const Add = () => {
    const [inputValue, setInputValue] = useState("0,00");

    function formatarNumeroParaDinheiro(numero) {

        numero = numero.toFixed(2);
      
  
        numero = numero.replace(".", ",");
        numero = "R$ " + numero;
      
        return numero;
      }
      

    useEffect(() => {
        setInputValue("0,00")
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: 40, paddingLeft: 10, paddingRight: 10, gap: 15, backgroundColor: '#131313' }}>
            <View style={styles.pai}>
                <View style={styles.top}>
                    <Text style={styles.total}>
                        Total:
                    </Text>
                    <Text style={styles.valor}>
                        {`R$ ${inputValue}`}
                    </Text>
                </View>
                <TextInput
                    placeholderTextColor="whitesmoke"
                    style={styles.input}
                    placeholder='Valor a ser add ?'
                    keyboardType='numeric'
                    value={inputValue}
                />
                <TouchableOpacity>
                    <Text>
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    top: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        padding: 15,
    },
    total: {
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    valor: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    input: {
        marginTop: 15,
        width: '100%',
        height: 60,
        borderBottomColor: 'gray',
        borderWidth: 1,
        padding: 8,
        color: 'white',
    },
})

export default Add
