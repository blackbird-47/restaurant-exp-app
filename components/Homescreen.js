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
            <Pressable onPress={() => navigation.navigate('newsletterscreen')}>
                <Text style={styles.loginButton}>Sign up for our Newsletter</Text>
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
    menuButton: {
        fontSize: 20,
        padding: 8,
        color: '#283618',
        borderRadius: 12,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#dda15e',
        alignSelf: 'center',
        top: 210,
    },
});