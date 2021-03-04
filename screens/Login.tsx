import React, { useState } from "react"
import { Component } from "react"
import { Button } from "react-native"
import { StyleSheet, View, Text } from "react-native"
import { ScrollView, TextInput, TouchableHighlight } from "react-native-gesture-handler"

interface Props {}
interface State {
    userId: string
    password: string
}

export class Login extends Component<Props, State> {

    state: State = {
        userId: '',
        password: ''
    }
    
    onSubmit() {
        alert(`login.. ${this.state.userId}, ${this.state.password}`);
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>로그인</Text>
                    <View style={styles.formInput}>
                        <Text>아이디</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => this.setState({userId: text})}
                            value={this.state.userId}
                        />
                    </View>
                    <View style={styles.formInput}>
                        <Text>비밀번호</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry={true}
                            onChangeText={(text) => this.setState({password: text})}
                            value={this.state.password}
                        />
                    </View>
                    <Button title="로그인" onPress={() => this.onSubmit()} />
                </View>
            </ScrollView >
        )
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 80
    },
    headerText: {
        textAlign: 'center',
        fontSize: 72,
        color: 'rgba(175, 47, 47, 0.25)',
        fontWeight: '100'
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    formInput: {
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginVertical: 10,
    },
    input: {
        marginTop: 10,
        backgroundColor: "white",
        width: "100%",
        height: 40,
        padding: 10,
        borderRadius: 4,
    },
})