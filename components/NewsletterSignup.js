import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Pressable} from "react-native";
import Logo from './Logo';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePress = () => {
        setIsSignup(true);
        alert('Thank you for signing up!');
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Text style={styles.welcomeText}>Welcome to Little Lemon.</Text>
            <View>
                <Text style={styles.text}>Sign up for our newsletter.</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={handleEmailChange}
                    keyboardType='email-address'
                />
                { 
                    email.length === 0 && 
                    <Text style={styles.disabledButton}>Sign up</Text> 
                }
                {
                    email.length > 0 && 
                    <Pressable onPress={handlePress}>
                        <Text style={styles.button}>Sign up</Text>
                    </Pressable>
                }
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fefae0',
    },
    welcomeText: {
        flex: 0.3,
        fontSize: 30,
        padding: 20,
        color: '#283618',
        textAlign: 'center',
    },
    text: {
        fontSize: 24,
        padding: 30,
        color: '#283618',
        textAlign: 'center',
    },
    button: {
        fontSize: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#283618',
        borderRadius: 10,
        backgroundColor: '#dda15e',
        alignSelf: 'center',
    },
    disabledButton: {
        fontSize: 20,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        color: '#283618',
        borderRadius: 10,
        backgroundColor: '#d3d3d3',
        alignSelf: 'center',
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