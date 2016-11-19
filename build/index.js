// src/index.ts
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class App extends Component {
    render() {
        return (React.createElement(View, {style: styles.container}, 
            React.createElement(Text, {style: styles.text}, "THE END")
        ));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
//# sourceMappingURL=index.js.map