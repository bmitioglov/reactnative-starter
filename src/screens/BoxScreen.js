import React from 'react';
import { View, StyleSheet} from "react-native";


const CustomBoxScreen = () => {
    return <View style={styles.customViewStyle}>
        <View style={styles.viewStyle1}/>
        <View style={styles.viewStyle2}/>
        <View style={styles.viewStyle3}/>
    </View>
};

const styles = StyleSheet.create({
    customViewStyle: {
        borderWidth: 0,
        // borderColor: 'purple',
        height: 200,
        // justifyContent: 'center'
        flexDirection: 'row',
        justifyContent: 'space-between'
        // justifyContent: 'flex-start'
    },
    viewStyle1: {
        borderWidth: 3,
        borderColor: 'purple',
        width: 100,
        // flex: 5
    },
    viewStyle2: {
        borderWidth: 3,
        borderColor: 'red',
        width: 100,
        top: 195
        // flex: 5,
    },
    viewStyle3: {
        borderWidth: 3,
        borderColor: 'green',
        width: 100
        // flex: 1
    }
});

export default CustomBoxScreen;
