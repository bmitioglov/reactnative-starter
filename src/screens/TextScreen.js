import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                autoCapitalize="none"
                style={styles.text}
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            {name.length > 5 ? null : <Text>Password must be longer than 5 characters</Text>}
        </View>);
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
