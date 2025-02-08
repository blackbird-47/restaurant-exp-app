import React from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';

const Item = ({ name }) => (
    <View style={styles.item}>
        <Text style={styles.itemText}>{name}</Text>
    </View>
);

export default function Menu() {
    const renderItem = ({ item }) => <Item name={item.name} />;

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

const items = [
    { name: 'Hummus', id: '1A' },
    { name: 'Moutabal', id: '2B' },
    { name: 'Falafel', id: '3C' },
    { name: 'Marinated Olives', id: '4D' },
    { name: 'Kofta', id: '5E' },
    { name: 'Eggplant Salad', id: '6F' },
    { name: 'Lentil Burger', id: '7G' },
    { name: 'Smoked Salmon', id: '8H' },
    { name: 'Kofta Burger', id: '9I' },
    { name: 'Turkish Kebab', id: '10J' },
    { name: 'Fries', id: '11K' },
    { name: 'Buttered Rice', id: '12L' },
    { name: 'Bread Sticks', id: '13M' },
    { name: 'Pita Pocket', id: '14N' },
    { name: 'Lentil Soup', id: '15O' },
    { name: 'Greek Salad', id: '16Q' },
    { name: 'Rice Pilaf', id: '17R' },
    { name: 'Baklava', id: '18S' },
    { name: 'Tartufo', id: '19T' },
    { name: 'Tartufo', id: '20U' },
    { name: 'Tiramisu', id: '21V' },
    { name: 'Panna Cotta', id: '22W' },
  ];