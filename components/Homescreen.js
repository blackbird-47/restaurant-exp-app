import React from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import Header from '../components/HomeHeader';
import Logo from './Logo';
import Footer from '../components/HomeFooter';

export default function Homescreen() {
    const colorScheme = useColorScheme();

    return (
        <View style={[styles.container, {backgroundColor: colorScheme === 'light' ? '#fefae0' : '#283618'}]}>
            <Header/>
            <Logo/>
            <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    }
});