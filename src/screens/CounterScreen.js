import React, { useReducer } from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';



const reducer = (state, action) => {
    return {...state, counter: state.counter + action.payload}
};


const CounterScreen = ({imageSource, title, score}) => {

    const [state, dispatch] = useReducer(reducer, {counter: 0});

    const { counter } = state;

    // const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({type: 'change_counter', payload: 1})}/>
            <Button title="Decrease" onPress={() => dispatch({type: 'change_counter', payload: -1})}/>
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
});

export default CounterScreen;
