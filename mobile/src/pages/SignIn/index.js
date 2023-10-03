import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

export default function SignIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.radial_one}></View>
            <View style={styles.radial_two}></View>
            <View style={styles.view_logo}>
                <Image style={styles.logo} source={require('./logotipo1.png')} />
            </View>

            <View style={styles.background}>

            <View>
                <TextInput placeholder='Seu email' />
                <TextInput placeholder='Seu senha' />
            </View>

            
            <View style={styles.view_buttons}>
                <TouchableOpacity style={styles.button_signin} onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.button_text_signin}>Entrar</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};


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
        width: 600,
        height: 550,
        top: -335,
        backgroundColor: 'rgba(0, 252, 248, 0.8)',
        borderRadius: 500,
    },
    radial_two: {
        position: 'absolute',
        width: 500,
        height: 450,
        top: -300,
        backgroundColor: '#00FCF8',
        borderRadius: 500,
    },

    view_logo: {
        position: 'absolute',
        top: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 102,
    },

    background: {
        position: 'absolute',
        width: 300,
        height: 300,
        borderRadius: 25,
        backgroundColor: 'rgba(34, 42, 63, 1)',
    },

    view_buttons: {
        position: 'absolute',
        flex: 1,
        gap: 15,
        top: 530,
    },

    button_signin: {
        paddingHorizontal: 60,
        paddingVertical: 10,
        backgroundColor: "#222A3F",
        borderRadius: 20,
    },

    button_text_signin: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#ffffff",
        textAlign: "center",
    },

});