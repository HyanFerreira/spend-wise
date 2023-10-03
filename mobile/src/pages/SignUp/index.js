import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUp() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.radial_one}></View>
            <View style={styles.radial_two}></View>
            <View style={styles.view_logo}>
                <Image style={styles.logo} source={require('../../assets/logotipo1.png')} />
            </View>
            <View style={styles.content_singup}>
                <View>
                    <Text style={styles.text_signup}>
                        CADASTRE-SE
                    </Text>
                </View>
                <View style={styles.content_buttons}>
                    <TextInput style={styles.button}
                        placeholder="Nome"
                        placeholderTextColor="white"
                    />
                    <TextInput style={styles.button}
                        placeholder="Sobrenome"
                        placeholderTextColor="white"
                    />
                    <TextInput style={styles.button}
                        placeholder="CPF"
                        placeholderTextColor="white"
                    />
                    <TextInput style={styles.button}
                        placeholder="Senha"
                        placeholderTextColor="white"
                    />
                    <TextInput style={styles.button}
                        placeholder="Confirme a senha"
                        placeholderTextColor="white"
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.button_signup} onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.button_text_signup} >CADASTRAR</Text>
                    </TouchableOpacity>
                </View>
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
    content_singup: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        width: 300,
        height: 480,
        top: 170,
        borderRadius: 25,
        backgroundColor: 'rgba(34, 42, 63, 1)',
        gap: 10,
    },
    text_signup: {
        fontSize: 30,
        marginTop: 10,
        color: '#00FCF8',
        fontWeight: 'bold',
    },
    content_buttons: {
        flex: 1,
        gap: 20,
    },
    button: {
        width: 260,
        height: 50,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'rgba(51, 65, 90, 1)',
        color: '#ffffff',
        borderRadius: 15,
    },
    button_signup: {
        width: 260,
        height: 50,
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 252, 248, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_text_signup: {
        color: '#ffff',
    },
});