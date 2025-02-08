import React from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import Footer from './HomeFooter';

const Item = ({ name, price }) => (
    <View style={styles.item}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.priceText}>{price}</Text>
    </View>
);

const Separator = () => (
    <View style={styles.separator}/>
);

export default function Menu() {
    const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

    const renderSectionHeader = ({ section: {title} }) => (
        <Text style={styles.sectionHeaderText}>{title}</Text>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.menuHeading}>Menu.</Text>
            <SectionList 
                sections={items} 
                keyExtractor={(item, index) => item + index} 
                renderItem={renderItem} 
                renderSectionHeader={renderSectionHeader} 
                ListFooterComponent={Footer}
                ItemSeparatorComponent={Separator}/>
            
            {/* <FlatList data={items} keyExtractor={(item) => item.id} renderItem={renderItem}/>
            The following ScrollView block is disabled in favor of using FlatList for better performance and built-in optimizations
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
        marginBottom: 135,
    },
    scrollContainer: {
        top: 40,
        padding: 10,
    },
    menuHeading: {
        fontSize: 22, 
        fontWeight: 'bold',
        padding: 10, 
        textAlign: 'center', 
        color: '#606c38', 
        fontFamily: 'sf-pro-display'
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
        fontSize: 18,
        fontFamily: 'sf-pro-display',
        color: '#606c38',
    },
    priceText: {
        flex: 0.5,
        fontSize: 18,
        fontFamily: 'sf-pro-display',
        color: '#606c38',
        textAlign: 'right',
    },
    sectionHeaderText: {
        fontSize: 20,
        fontFamily: 'sf-pro-display',
        backgroundColor: '#dda15e',
        textAlign: 'center',
    },
    separator: {
        backgroundColor: '#606c38', 
        height: 1
    }
});

const items = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
      ],
    },
  ];
  