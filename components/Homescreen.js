import React from 'react';
import { View, StyleSheet, useColorScheme, Pressable, Text } from 'react-native';
import Header from '../components/HomeHeader';
import Logo from './Logo';
import Footer from '../components/HomeFooter';

export default function Homescreen ({ navigation }) {
    const colorScheme = useColorScheme();

    return (
        <View style={[styles.container, {backgroundColor: colorScheme === 'light' ? '#fefae0' : '#283618'}]}>
            <Header/>
            <Logo/>
            <Pressable onPress={() => navigation.navigate('login')}>
                <Text style={styles.loginButton}>Go to Login Page</Text>
            </Pressable>
            <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    loginButton: {
        fontSize: 20,
        padding: 8,
        color: '#283618',
        borderRadius: 12,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#dda15e',
        alignSelf: 'center',
        top: 200,
    },
});