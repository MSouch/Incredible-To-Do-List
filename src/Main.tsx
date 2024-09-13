import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
} from "react-native"


//react native main component
const Main = () : React.JSX.Element => {
return (
    <SafeAreaView style = {styles.appBg}>
        <View>
            <Text> Incredible To-Do list app</Text>
        </View>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
    headerTxt: {
        fontSize: 100,
        fontWeight: '600',
        color: "red",
    },
    headerArea: {

    },
    appBg: {
        backgroundColor: "green",
    },
});


export default Main;