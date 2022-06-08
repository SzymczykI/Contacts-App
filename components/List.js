import { Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { customers } from "../customers.js";
import { styles } from "../styles/GlobalStyle";
import Card from "./Card";

const List = ({ navigation }) => {

    const list = customers.map((cus, i) =>
        <View>
            <TouchableOpacity onPress={() => navigation.navigate("Card", { key: i, cus: cus })}>
                <Text>{cus.name.first}{cus.name.last}</Text>
            </TouchableOpacity>
        </View>
    );

    return (

        <View style={styles.list}>
            {list}
        </View>
    )
}

export default List