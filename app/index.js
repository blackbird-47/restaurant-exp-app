import {View} from 'react-native';
import Header from '../components/HomeHeader';
import Footer from '../components/HomeFooter';
import WelcomeMessage from '../components/WelcomeMessage';
import Menu from '../components/Menu';

export default function App() {
    return (
        <View style={{flex: 1, backgroundColor: '#fefae0'}}>
            <Header/>
            <WelcomeMessage/>
            {/*<Menu/>*/}
            <Footer/>
        </View>
    );
}