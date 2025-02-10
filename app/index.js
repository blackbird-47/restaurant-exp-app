import {View, StyleSheet, useColorScheme, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Homescreen from '../components/Homescreen';
import NewsletterSignup from '../components/NewsletterSignup';

const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();
//const Drawer = createDrawerNavigator();

const logo = () => {
    return <Image 
                source={require("../assets/littlelemon_logo.webp")} 
                style={styles.logo} 
                accessible={true}
                accessibilityLabel='Little Lemon Logo'
            />;
}

export default function App() {
    return (
            <Stack.Navigator initialRouteName='homescreen'>
                <Stack.Screen name="homescreen" component={Homescreen} options={{headerTitle: logo, title: "Home"}}/>
                <Stack.Screen name="newsletterscreen" component={NewsletterSignup} options={{title: "Newsletter"}}/>
            </Stack.Navigator>   
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1, 
    },
    logo: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
});
