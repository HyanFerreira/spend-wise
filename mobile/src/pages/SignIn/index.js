import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default function SignIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.radial_one}></View>
            <View style={styles.radial_two}></View>
            <View style={styles.view_logo}>
                <Image style={styles.logo} source={require('./logotipo1.png')} />
            </View>

            <View style={styles.content_signin}>
                <View>
                    <Text style={styles.text_signin}>
                        ENTRAR
                    </Text>
                </View>

                <View style={styles.content_buttons}>

                    <Image
                        source={require('../../assets/icons/cpf.png')}
                        style={styles.icon}
                    />
                    <TextInput style={styles.button}
                        placeholder="CPF"
                        placeholderTextColor="white"
                    />
                    <TextInput style={styles.button}
                        placeholder="Senha"
                        placeholderTextColor="white"
                    />

                </View>

                <View style={styles.text_dont_have}>
                    <TouchableOpacity>
                            <Text style={styles.button_text_dont_have} onPress={() => navigation.navigate("SignUp")}>Não possui uma conta?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                            <Text style={styles.button_text_forgot}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>


                <View>
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

    content_signin: {
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        width: 300,
        height: 350,
        top: 170,
        borderRadius: 25,
        backgroundColor: 'rgba(34, 42, 63, 1)',
        gap: 10,
    },

    text_signin: {
        fontFamily: 'League Spartan',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#00FCF8',
    },

    content_buttons: {
        flex: 1,
        gap: 20,
    },
    button: {
        width: 260,
        height: 50,
        paddingLeft: 45,
        paddingRight: 30,
        paddingBottom: 10,
        backgroundColor: 'rgba(51, 65, 90, 1)',
        color: '#ffffff',
        borderRadius: 15,
    },

    button_signin: {
        width: 260,
        height: 50,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 252, 248, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_text_signin: {
        color: '#ffff',
        fontFamily: 'League Spartan',
    },
    icon: {
        position: 'absolute',
        zIndex: 99,
        width: 35,
        height: 25,
        top: 10,
        left: 10,
        resizeMode: 'contain'
    },

    text_dont_have: {
        color: '#ffffff',
        flex: 1,
        gap: -80,
        top: 40,
    },

    button_text_forgot: {
        color: '#ffffff',
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
    },

    button_text_dont_have: {
        color: '#ffffff',
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        top: 0,
    }
});