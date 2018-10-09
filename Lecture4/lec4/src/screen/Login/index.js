import React, { Component } from "react";
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity } from "react-native";

export default class Login extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../image/ico-logo.png')}
                    />

                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.welcomTitle}>WELCOME</Text>
                    <View style={styles.inputForm}>
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
                        <TouchableOpacity>
                            <Text style={styles.buttonForgotPassword}>Forgot password?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonContainer}
                        >
                            <Text style={styles.buttonText}>SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footer}>

                    <Text style={styles.textForSignUp}>Don't have an account?</Text>
                    <TouchableOpacity>
                        
                        <Text style={styles.buttonCreatAcc}>Create new account</Text>
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
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F5F6F7",
        flex: 2
    },
    logo: {
        width: 200,
        height: 50
    },
    formContainer: {
        alignItems: 'center',
        flex: 4,
        backgroundColor: "#F5F6F7",
    },
    welcomTitle: {
        marginTop: 0,
        fontFamily: 'Roboto',
        color: '#5B5A5A',
        fontSize: 25
    },
    inputForm: {
        marginTop: 30,
    },
    input: {
        height: 40,
        width: 300,
        backgroundColor: '#CFD0D1',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    buttonForgotPassword: {
        color: "#5B5A5A",
        fontFamily: 'Roboto',
        fontSize: 10,
        marginTop: 5,
        textAlign: 'right',
    },
    buttonContainer: {
        marginTop: 40,
        height: 45,
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
    footer: {
        flex: 2,
        backgroundColor: "#F5F6F7",
        paddingBottom: 10,
        alignItems: 'center',
        
        justifyContent:'flex-end'
    },
    textForSignUp:{
        textAlign:'center',
        fontFamily: 'Roboto',
        fontSize: 13,
        fontWeight: 'bold',
    },
    buttonCreatAcc:{
        marginBottom: 10,
        textAlign:'center',
        fontFamily: 'Roboto',
        fontSize: 13
    }
});