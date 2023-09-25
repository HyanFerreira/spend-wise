import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SignIn() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Gabriel, cala a sua boca.
            </Text>
            <View style={styles.block}>
                <View style={styles.card}>
                    <Text style={styles.text_card}>
                        É um otário? Sim.
                    </Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.text_card}>
                        É um otário? Claro.
                    </Text>
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
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 30,
        color: '#000000'
    },
    block: {
        flexDirection: 'row',
        gap: 20,
        paddingTop: 15,
    },
    card: {
        width: 180,
        height: 'auto',
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 5,
    },
    text_card: {
        color: '#ffffff',
        fontSize: 20,
        textAlign: 'center',
    }
});

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// export default function SignIn() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSignIn = () => {
//         // Aqui você pode adicionar a lógica de autenticação
//         // Verificar o email e a senha inseridos e realizar o login
//         // ou exibir uma mensagem de erro se as credenciais estiverem incorretas.
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Login</Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 onChangeText={text => setEmail(text)}
//                 value={email}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Senha"
//                 onChangeText={text => setPassword(text)}
//                 value={password}
//                 secureTextEntry
//             />
//             <TouchableOpacity style={styles.button} onPress={handleSignIn}>
//                 <Text style={styles.buttonText}>Entrar</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         paddingHorizontal: 16,
//     },
//     title: {
//         fontSize: 24,
//         marginBottom: 16,
//     },
//     input: {
//         width: '100%',
//         height: 40,
//         borderColor: 'gray',
//         borderWidth: 1,
//         borderRadius: 8,
//         marginBottom: 16,
//         paddingHorizontal: 10,
//     },
//     button: {
//         backgroundColor: 'blue',
//         paddingVertical: 12,
//         paddingHorizontal: 24,
//         borderRadius: 8,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 16,
//         textAlign: 'center',
//     },
// });
