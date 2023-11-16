import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image , Linking } from 'react-native';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    const apikey = '8f63a06db94642a2862d94480920568b';
    const apiUrl = `https://newsapi.org/v2/everything?q=finanças&sources=globo&apiKey=${apikey}`;

    const setItens = async () => {
        try {
            const response = await fetch(apiUrl);
            const result = await response.json();
            if (result) {
                setNoticias(result.articles);
            }else{
                setNoticias('Esperanção conexão !')
            }

        } catch (error) {
            console.error('Erro ao carregar notícias:', error);
        }
    };

    const abrirlink = (url) => {
        Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
    };

    useEffect(() => {
        setItens();
    }, []);

    return (
        <View style={styles.pai}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={noticias}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity activeOpacity={1} style={styles.box} onPress={()=> abrirlink(item.url) }>
                        <Image source={{ uri: item.urlToImage }} style={styles.img}/>
                        <Text style={styles.title}>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    pai:{
        paddingRight:10,
        paddingLeft:10,
        gap:10,
    },
    box:{
        gap:10,
        marginBottom: 15,
        borderRadius:20,
        backgroundColor:'#252525',
        padding:10
    },
    img:{
        width:'100%',
        height:200,
        borderRadius:20,

    },
    title:{
        color:'white',
        fontSize:15,
        textTransform:'uppercase',
        fontWeight:'bold',
    },
    description:{
        color:'white',
        fontSize:10,
    },
});

export default Noticias;
