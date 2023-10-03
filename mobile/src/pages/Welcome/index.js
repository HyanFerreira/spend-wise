import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const textCarouselItems = [
    'Sua plataforma de gerenciamento financeiro completa, para que você possa gastar com sabedoria e alcançar seus sonhos financeiros.',
    'Texto 2 do carousel',
    'Texto 3 do carousel',
    'Texto 4 do carousel',
];

export default function Welcome() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentTextIndex((prevIndex) =>
                prevIndex === textCarouselItems.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, [currentTextIndex]);

    return (
        <View style={styles.container}>
            <View style={styles.radial_one}></View>
            <View style={styles.radial_two}></View>
            <View style={styles.view_logo}>
                <Image style={styles.logo} source={require('../../assets/logotipo1.png')} />
            </View>
            <View style={styles.view_carousel}>
                <Text style={styles.text_carousel}>
                    {textCarouselItems[currentTextIndex]}
                </Text>
            </View>
            <View style={styles.view_buttons}>
                <TouchableOpacity style={styles.button_signup} onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.button_text_signup}>Cadastre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_signin} onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.button_text_signin}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#33415A',
        overflow: 'hidden',
    },
    radial_one: {
        position: 'absolute',
        width: 550,
        height: 550,
        top: -335,
        backgroundColor: 'rgba(0, 252, 248, 0.8)',
        borderRadius: 500,
    },
    radial_two: {
        position: 'absolute',
        width: 450,
        height: 450,
        top: -300,
        backgroundColor: '#00FCF8',
        borderRadius: 500,
    },
    view_logo: {
        position: 'absolute',
        top: 20,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 102,
    },
    view_carousel: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 200,
        borderRadius: 10,
        backgroundColor: '#222A3F',
        top: 300,
    },
    text_carousel: {
        textAlign: 'center',
        padding: 15,
        color: '#ffff',
    },
    view_buttons: {
        position: 'absolute',
        flex: 1,
        gap: 15,
        top: 530,
    },
    button_signup: {
        paddingHorizontal: 60,
        paddingVertical: 10,
        backgroundColor: "#00FCF8",
        borderRadius: 20,
    },
    button_signin: {
        paddingHorizontal: 60,
        paddingVertical: 10,
        backgroundColor: "#222A3F",
        borderRadius: 20,
    },
    button_text_signup: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#33415A",
        textAlign: "center",
    },
    button_text_signin: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#ffffff",
        textAlign: "center",
    },

});