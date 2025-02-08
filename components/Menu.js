import React from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList, SectionList } from 'react-native';
import Footer from './HomeFooter';

const Item = ({ name }) => (
    <View style={styles.item}>
        <Text style={styles.nameText}>{name}</Text>
    </View>
);

const Separator = () => (
    <View style={styles.separator}/>
);

export default function Menu() {
    const renderItem = ({ item }) => <Item name={item} />;

    const renderSectionHeader = ({ section: {title} }) => (
        <Text style={styles.sectionHeaderText}>{title}</Text>
    );

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 22, fontWeight: 'bold', padding: 10, textAlign: 'center', color: '#606c38', fontFamily: 'sf-pro-display'}}>Menu.</Text>
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
    item: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',        
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
        'Hummus',
        'Moutabal',
        'Falafel',
        'Marinated Olives',
        'Kofta',
        'Eggplant Salad',
      ],
    },
    {
      title: 'Main Dishes',
      data: ['Lentil Burger', 'Smoked Salmon', 'Kofta Burger', 'Turkish Kebab'],
    },
    {
      title: 'Sides',
      data: [
        'Fries',
        'Buttered Rice',
        'Bread Sticks',
        'Pita Pocket',
        'Lentil Soup',
        'Greek Salad',
        'Rice Pilaf',
      ],
    },
    {
      title: 'Desserts',
      data: ['Baklava', 'Tartufo', 'Tiramisu', 'Panna Cotta'],
    },
  ];
  