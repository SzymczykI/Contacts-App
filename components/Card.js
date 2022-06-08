import { View, Text, Image } from 'react-native';
import { styles } from '../styles/GlobalStyle'

const Card = ({route, navigation}) => {
    const {cus, key} = route.params;
    return (
        <View style={styles.card}>
            <Image style={styles.card_img} source={{ uri: cus.picture.large}} />
            <Text>{cus.name.title}{cus.name.first}{cus.name.last}</Text>
            <Text>{cus.location.street.number}{cus.location.street.name}</Text>
            <Text>{cus.location.city}{cus.location.postcode}</Text>
            <Text>{cus.location.country}</Text>
            <Text>email: {cus.email}</Text>
            <Text>Age: {cus.dob.age}</Text>
            <Text>Phone: {cus.phone}</Text>
            <Text>Cell: {cus.cell}</Text>
            <Text>Nationality: {cus.nat}</Text>
        </View>
    )
}

export default Card