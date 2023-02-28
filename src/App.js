import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Snackbar from "react-native-snackbar";

const reactImg =
    "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png";

const App = () => {
    useEffect(() => {
        Snackbar.show({
            text: "Hello world",
            duration: 100,
        });
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>React Native</Text>
            <Text style={styles.subText}>
                Welcome to the world of App development.
            </Text>
            <Image
                style={styles.image}
                source={{
                    uri: reactImg,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        fontWeight: 800,
        fontSize: 40,
        color: "#111",
    },
    subText: {
        fontSize: 20,
        color: "#111",
    },
    image: {
        height: 100,
        width: 100,
    },
});

export default App;
