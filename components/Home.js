import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from '../styles/GlobalStyle';
import List from './List';

const Home = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text>Contact list</Text>
            <List />
        </View>
    );
}

export default Home;