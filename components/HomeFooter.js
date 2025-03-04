import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonFooter() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>All rights reserved by Little Lemon, 2025</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#606c38',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    text: {
        fontSize: 15,
        color: '#fefae0',
        fontFamily: 'sf-pro-display'
    },
});