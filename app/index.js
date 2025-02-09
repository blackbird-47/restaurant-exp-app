import {View, StyleSheet, useColorScheme} from 'react-native';
import Header from '../components/HomeHeader';
import WelcomeMessage from '../components/WelcomeMessage';
import Menu from '../components/Menu';
import Footer from '../components/HomeFooter';
import UsernameForm from '../components/UsernameForm';
import Login from '../components/Login';
import Logo from '../components/Logo';

export default function App() {
    const colorScheme = useColorScheme();

    return (
        <View style={[styles.main, {backgroundColor: colorScheme === 'light' ? '#fefae0' : '#283618'}]}>
            <Header/>
            <Logo/>
            {/*<WelcomeMessage/>
            <Menu/>
            <UsernameForm/>
            <Login/>*/}
            <Footer/>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1, 
    }
});