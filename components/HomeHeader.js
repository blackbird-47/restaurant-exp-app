import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Little Lemon</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#606c38',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fefae0',
        fontFamily: 'sf-pro-display'
    },
});