import React from 'react';
import { View, StyleSheet,Text } from 'react-native';


class FavoritePage extends React.Component{

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>FavoritePage</Text>
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
export default FavoritePage;