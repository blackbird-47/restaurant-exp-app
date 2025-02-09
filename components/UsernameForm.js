import React, { useState } from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native';

export default function UsernameForm() {
    const [firstName, setFirstName] = useState('');

    const handleInputChange = (text) => {
        setFirstName(text);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <TextInput
                style={styles.input}
                placeholder="First Name"
                value={firstName}
                onChangeText={handleInputChange}
                keyboardType='default'
            />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: '#fefae0',
    },
});