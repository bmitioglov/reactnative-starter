import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({imageSource, title, score}) => {
    return (
        <View>
            <Image source={imageSource} />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>Image Score - {score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    }
});

export default ImageDetail;
