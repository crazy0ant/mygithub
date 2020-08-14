import React from 'react';
import { View, StyleSheet,Text, Button } from 'react-native';


class TrendingPage extends React.Component{

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>TrendingPage</Text>
                <Button title={'修改theme'} onPress={()=>{
                    navigation.setParams({
                        theme: {
                            tintColor: 'blue',
                            updateTime: new Date().getTime()
                        }
                    })
                }}/>
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
