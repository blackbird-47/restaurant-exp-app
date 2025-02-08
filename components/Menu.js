import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';

export default function Menu() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 22, fontWeight: 'bold', padding: 10, textAlign: 'center', color: '#606c38', fontFamily: 'sf-pro-display'}}>Menu.</Text>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true} indicatorStyle='white'> 
                {items.map((item) => (
                    <View style={styles.item} key={item}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 100,
        padding: 10,
    },
    scrollContainer: {
        top: 40,
        padding: 10,
    },
    item: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 0,
        borderRadius: 5,
        alignItems: 'center',
    },
    itemText: {
        fontSize: 20,
        fontFamily: 'sf-pro-display'
    },
});

const items = ["Burger", "Sandwich", "Pizza", "Pasta", "Salad", "Soup", "Dessert", "Drinks", "Coffee", "Tea", "Beer", "Wine"];