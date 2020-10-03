import React, {useState} from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';

const ColorCounter = ({color, onIncrease, onDecrease}) => {

    return (<View>
        <Text>{color}</Text>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
    </View>);
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
});

export default ColorCounter;
