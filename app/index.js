import {View, StyleSheet, useColorScheme, Image} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../components/Menu';
import Login from '../components/Login';
import Homescreen from '../components/Homescreen';

const Stack = createNativeStackNavigator();

const logo = () => {
    return <Image 
                source={require("../assets/littlelemon_logo.webp")} 
                style={styles.logo} 
                accessible={true}
                accessibilityLabel='Little Lemon Logo'
            />;
}

export default function App() {
    const colorScheme = useColorScheme();

    return (
            <Stack.Navigator initialRouteName="homescreen" screenOptions={{headerStyle: {backgroundColor: '#fefae0'}}}>
                <Stack.Screen name="homescreen" component={Homescreen} options={{headerTitle: logo}}/>
                <Stack.Screen name="login" component={Login} options={{title: "Login"}}/>
                <Stack.Screen name="menu" component={Menu} options={{title: "Menu"}}/>
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
