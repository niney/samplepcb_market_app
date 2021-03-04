import React from "react";
import { Component } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

interface IProp {
    inputValue: string;
    inputChange(text: string): void;
}

export const Input: React.FC<IProp> = ({ inputValue, inputChange }) => (
    <View style={styles.inputContainer}>
        <TextInput
            value={inputValue}
            style={styles.input}
            placeholder='What needs to be done?'
            placeholderTextColor='#CACACA'
            selectionColor='#666666'
            onChangeText={inputChange}
        />
    </View>
)

const styles = StyleSheet.create({
    inputContainer: {
        marginLeft: 20,
        marginRight: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowColor: '#000000',
        shadowOffset: { width: 2, height: 2 }
    },
    input: {
        height: 60,
        backgroundColor: '#ffffff',
        paddingLeft: 10,
        paddingRight: 10
    }
});