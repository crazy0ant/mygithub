import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';


class MyPage extends React.Component{

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>MyPage</Text>
                <Button title={'修改theme'} onPress={()=>{
                    navigation.setParams({
                        theme: {
                            tintColor: '#f00',
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
    welcome:{
        fontSize: 20,
        textAlign: 'center'
    }
})
export default MyPage;
