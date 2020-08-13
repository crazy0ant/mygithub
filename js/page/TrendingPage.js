import React from 'react';
import { View, StyleSheet,Text } from 'react-native';


class TrendingPage extends React.Component{

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>TrendingPage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff'
    },
    text:{
        fontSize: 20,
        textAlign: 'center'
    }
})
export default TrendingPage;