import React from 'react';
import { View, StyleSheet,Text } from 'react-native';


class MyPage extends React.Component{

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>MyPage</Text>
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
    welcome:{
        fontSize: 20,
        textAlign: 'center'
    }
})
export default MyPage;