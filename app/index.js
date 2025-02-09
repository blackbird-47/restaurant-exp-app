import {View, StyleSheet, useColorScheme} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from '../components/Menu';
import Login from '../components/Login';
import Homescreen from '../components/Homescreen';

const Stack = createNativeStackNavigator();

export default function App() {
    const colorScheme = useColorScheme();

    return (
            <Stack.Navigator initialRouteName="homescreen" screenOptions={{headerStyle: {backgroundColor: '#fefae0'}}}>
                <Stack.Screen name="homescreen" component={Homescreen} options={{title: "Home"}}/>
                <Stack.Screen name="login" component={Login} options={{title: "Login"}}/>
                <Stack.Screen name="menu" component={Menu} options={{title: "Menu"}}/>
            </Stack.Navigator>   
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1, 
    }
});