import {View, StyleSheet, useColorScheme, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import Menu from '../components/Menu';
import Login from '../components/Login';
import Homescreen from '../components/Homescreen';

//const Stack = createNativeStackNavigator();
//const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
            <Drawer.Navigator initialRouteName='homescreen'>
                <Drawer.Screen name="homescreen" component={Homescreen} options={{headerTitle: logo, title: "Home"}}/>
                <Drawer.Screen name="login" component={Login} options={{title: "Login"}}/>
                <Drawer.Screen name="menu" component={Menu} options={{title: "Menu"}}/>
            </Drawer.Navigator>   
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
