import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView} from "react-native";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Text style={styles.welcomeText}>Welcome to Little Lemon.</Text>
            <Text style={styles.loginText}>Login to Continue</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType='default'
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={handlePasswordChange}
                keyboardType='default'
                secureTextEntry={true}
            />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    welcomeText: {
        fontSize: 30,
        padding: 20,
        color: '#283618',
        textAlign: 'center',
    },
    loginText: {
        fontSize: 24,
        padding: 30,
        color: '#283618',
        textAlign: 'center',
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