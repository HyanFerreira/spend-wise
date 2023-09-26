import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const textCarouselItems = [
    'Sua plataforma de gerenciamento financeiro completa, para que você possa gastar com sabedoria e alcançar seus sonhos financeiros.',
    'Texto 2 do carousel',
    'Texto 3 do carousel',
    'Texto 4 do carousel',
];

export default function Welcome() {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

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
                <Image style={styles.logo} source={require('./logotipo1.png')} />
            </View>
            <View style={styles.view_carousel}>
                <Text style={styles.text_carousel}>
                    {textCarouselItems[currentTextIndex]}
                </Text>
            </View>
            <View style={styles.view_buttons}>
                <TouchableOpacity style={styles.button_signup}>
                    <Text style={styles.button_text_signup}>Cadastre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button_signin}>
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
});