import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "#ffffff",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        padding: 10,
        backgroundColor: "#4caf50",
        borderRadius: 5,
        marginTop: 20,
    }
})