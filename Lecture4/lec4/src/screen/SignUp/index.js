import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from "react-native";

export default class SignUp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomTitle}>CREATE NEW ACCOUNT</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={{ height: 50, width: 300, flexDirection: 'row' }}>
                        <TextInput style={styles.inputHalf}
                            placeholder="First"
                            placeholderTextColor="#979899"
                            underlineColorAndroid="transparent"
                        />
                        <TextInput style={styles.inputHalf}
                            placeholder="Latsname"
                            placeholderTextColor="#979899"
                            underlineColorAndroid="transparent"
                        />
                    </View>




                    <TextInput style={styles.input}
                        placeholder="Username"
                        placeholderTextColor="#979899"
                        underlineColorAndroid="transparent"
                    />
                    <TextInput style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#979899"
                        underlineColorAndroid="transparent"
                    />
                    <TextInput style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#979899"
                        secureTextEntry
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity style={styles.buttonContainer}
                    >
                        <Text style={styles.buttonText}>CREATE NEW ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F5F6F7",
        flex: 1
    },
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F6F7',
        flex: 2,
    },
    welcomTitle: {
        marginTop: 0,
        fontFamily: 'Roboto',
        color: '#5B5A5A',
        fontSize: 20,
        textAlign: 'center',
        width: 150
    },
    formContainer: {
        backgroundColor: '#F5F6F7',
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerContainer: {
        backgroundColor: '#F5F6F7',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: 300,
        borderColor: '#CFD0D1',
        borderWidth: 0.5,
        backgroundColor: '#F5F6F7',
        paddingHorizontal: 10,
    },
    inputHalf: {
        height: 50,
        width: 150,
        flex: 1,
        borderColor: '#CFD0D1',
        borderWidth: 0.5,
        backgroundColor: '#F5F6F7',
        paddingHorizontal: 10,
    },
    buttonContainer: {
        marginTop: 40,
        height: 45,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#129793',
        borderRadius: 25,
        shadowOffset: { width: 0, height: 15 }
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        fontSize: 13
    },
});