import React from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';

const Item = ({ name, price }) => (
    <View style={styles.item}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.priceText}>{price}</Text>
    </View>
);

export default function Menu() {
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 22, fontWeight: 'bold', padding: 10, textAlign: 'center', color: '#606c38', fontFamily: 'sf-pro-display'}}>Menu.</Text>
            <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderItem}/>
            {/* The following ScrollView block is disabled in favor of using FlatList for better performance and built-in optimizations */}
            {/* <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={true} indicatorStyle='white'> 
                {items.map((item) => (
                    <View style={styles.item} key={item}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                ))}
            </ScrollView> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 100,
        padding: 10,
        marginBottom: 200,
    },
    scrollContainer: {
        top: 40,
        padding: 10,
    },
    item: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',        
        flexDirection: 'row',
    },
    nameText: {
        flex: 0.5,
        fontSize: 20,
        fontFamily: 'sf-pro-display'
    },
    priceText: {
        flex: 0.5,
        fontSize: 20,
        fontFamily: 'sf-pro-display',
        textAlign: 'right',
    },
});

const items = [
    { name: 'Hummus', price: '$5.00', id: '1A' },
    { name: 'Moutabal', price: '$5.00', id: '2B' },
    { name: 'Falafel', price: '$7.50', id: '3C' },
    { name: 'Marinated Olives', price: '$5.00', id: '4D' },
    { name: 'Kofta', price: '$5.00', id: '5E' },
    { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
    { name: 'Lentil Burger', price: '$10.00', id: '7G' },
    { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
    { name: 'Kofta Burger', price: '$11.00', id: '9I' },
    { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
    { name: 'Fries', price: '$3.00', id: '11K' },
    { name: 'Buttered Rice', price: '$3.00', id: '12L' },
    { name: 'Bread Sticks', price: '$3.00', id: '13M' },
    { name: 'Pita Pocket', price: '$3.00', id: '14N' },
    { name: 'Lentil Soup', price: '$3.75', id: '15O' },
    { name: 'Greek Salad', price: '$6.00', id: '16Q' },
    { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
    { name: 'Baklava', price: '$3.00', id: '18S' },
    { name: 'Tartufo', price: '$3.00', id: '19T' },
    { name: 'Tiramisu', price: '$5.00', id: '20U' },
    { name: 'Panna Cotta', price: '$5.00', id: '21V' },
  ];