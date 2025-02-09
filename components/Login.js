import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Pressable} from "react-native";

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <Text style={styles.welcomeText}>Welcome to Little Lemon.</Text>
            {!isLogin && (
                <View>
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
                    <Pressable style={styles.loginButton} onPress={() => setIsLogin(true)}>
                        <Text style={styles.loginButton}>Log in</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={styles.homeButton}>Go back</Text>
                    </Pressable>
                </View>
            )}
            {isLogin && <Text style={styles.loginText}>You are logged in.</Text>}
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
        flex: 0.3,
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
    loginButton: {
        fontSize: 20,
        padding: 5,
        color: '#283618',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#dda15e',
        alignSelf: 'center',
    },
    homeButton: {
        top: 20,
        fontSize: 20,
        padding: 10,
        color: '#283618',
        borderRadius: 10,
        width: 100,
        backgroundColor: '#dda15e',
        alignSelf: 'center',
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