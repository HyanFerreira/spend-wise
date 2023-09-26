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