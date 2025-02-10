import {View, StyleSheet, useColorScheme, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Menu from '../components/Menu';
import Login from '../components/Login';
import Homescreen from '../components/Homescreen';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
            <Tab.Navigator initialRouteName='homescreen' screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === 'homescreen') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'login') {
                        iconName = focused ? 'log-in' : 'log-in-outline';
                    } else if (route.name === 'menu') {
                        iconName = focused ? 'menu' : 'menu-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#dda15e',
                tabBarInactiveTintColor: '#283618',
                })}>
                <Tab.Screen name="homescreen" component={Homescreen} options={{headerTitle: logo}}/>
                <Tab.Screen name="login" component={Login} options={{title: "Login"}}/>
                <Tab.Screen name="menu" component={Menu} options={{title: "Menu"}}/>
            </Tab.Navigator>   
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
