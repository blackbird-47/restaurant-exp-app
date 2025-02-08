import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function WelcomeMessage() {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Little Lemon.</Text>
            <ScrollView style={stylesForDescription.container} indicatorStyle='black'>
                <Text style={stylesForDescription.welcomeText}>
                Little Lemon is a charming neighborhood bistro that serves simple food
                and classic cocktails in a lively but casual environment. We would love
                to hear more about your experience with us!
                </Text>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.85,
        top: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        fontSize: 30,
        padding: 20,
        color: '#283618',
    },
});

const stylesForDescription = StyleSheet.create({
    container: {
        padding: 10,
    },
    welcomeText: {
        fontSize: 22,
        padding: 20,
        textAlign: 'center',
        lineHeight: 40,
        color: '#283618',
        flexWrap: 'wrap',
    },
});
