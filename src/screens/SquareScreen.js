import React, { useReducer } from 'react';
import {View, StyleSheet, Text, Button, FlatList} from 'react-native';
import ColorCounter from "../components/ColorCounter";


const reducer = (state, action) => {
    switch (action.type) {
        case 'change_red':
            return { ...state, red: state.red + action.payload};
        case 'change_blue':
            return { ...state, blue: state.blue + action.payload};
        case 'change_green':
            return { ...state, green: state.green + action.payload};
        default:
            return state;
    }
};

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    const COLOR_INCREMENT = 15;
    const {red, green, blue} = state;

    console.log(red);

    return <View>
        <ColorCounter
            onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
            color="Red"/>
        <ColorCounter
            onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
            color="Blue"/>
        <ColorCounter
            onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
            onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
            color="Green"/>
        <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
    </View>;
};


const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
});

export default SquareScreen;
