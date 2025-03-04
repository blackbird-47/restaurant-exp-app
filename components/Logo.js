import React from 'react';
import { View, Text, Image, StyleSheet, useColorScheme } from 'react-native';

export default function Logo() {
    const colorScheme = useColorScheme();

    return (
        <View style={styles.container}>
            <Image 
                source={require("../assets/littlelemon_logo.webp")} 
                style={styles.logo} 
                accessible={true}
                accessibilityLabel='Little Lemon Logo'
            />
            <Text style={[styles.title, {color: colorScheme === 'light' ? '#283618' : '#fefae0'}]}>Little Lemon, your local Mediterranean Bistro.</Text>
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
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        top: 50,
    },
});