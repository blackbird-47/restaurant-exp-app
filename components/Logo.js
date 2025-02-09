import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Logo() {
    return (
        <View style={styles.container}>
            <Image 
                source={require("../assets/littlelemon_logo.webp")} 
                style={styles.logo} 
            />
            <Text style={styles.title}>Welcome to Little Lemon Restaurant.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        top: 70,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 50,
    },
});