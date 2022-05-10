import {StyleSheet, View, Text } from "react-native";
import React from "react";

export default function WelcomeScreen() {
    return (
        <View>
            <Text>
                Welcome Screen! 
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})