import {View, StyleSheet} from 'react-native';
import Header from '../components/HomeHeader';
import WelcomeMessage from '../components/WelcomeMessage';
import Menu from '../components/Menu';
import Footer from '../components/HomeFooter';
import UserForm from '../components/UserForm';

export default function App() {
    return (
        <View style={styles.main}>
            <Header/>
            <WelcomeMessage/>
            {/*<Menu/>*/}
            <UserForm/>
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