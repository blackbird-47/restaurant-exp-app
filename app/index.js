import {View, StyleSheet} from 'react-native';
import Header from '../components/HomeHeader';
import WelcomeMessage from '../components/WelcomeMessage';
import Menu from '../components/Menu';
import Footer from '../components/HomeFooter';
import UsernameForm from '../components/UsernameForm';
import Login from '../components/Login';
import Logo from '../components/Logo';

export default function App() {
    return (
        <View style={styles.main}>
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
        backgroundColor: '#fefae0'
    }
});