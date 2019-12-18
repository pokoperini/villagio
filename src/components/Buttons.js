import React from 'react';
import {
    Text, 
    Image,
    View,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator
} from 'react-native';
import styles from '../styles'

const Btn1 = ({
    text,
    onPress
}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttons.btn1} >
            <Text style={styles.buttons.text1}>{text}</Text>
        </TouchableOpacity>
    );
};

const Btn2 = ({
    text,
    onPress
}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttons.btn2} >
            <Text style={styles.buttons.text2}>{text}</Text>
        </TouchableOpacity>
    );
};

const Btn3 = ({
    text,
    onPress
}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.buttons.btn1} >
            <Text style={styles.buttons.text1}>{text}</Text>
        </TouchableOpacity>
    );
};

export {
    Btn1,
    Btn2,
    Btn3
}