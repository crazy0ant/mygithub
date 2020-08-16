import React from 'react';
import { View, StyleSheet,Text, Button,AsyncStorage } from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index'
class TrendingPage extends React.Component{

    componentDidMount() {
const url ='https://wwww.baidu.com';
fetch(url)
    .then(response=>{
        if(response.ok){
           return response.text();
        }
        throw new Error('Network response was not ok')
    })
    .then(responseText=>{
        console.log(responseText);
    })
    .catch(e=>{
        //仅当网络故障时或者请求被阻止时，才会标记为reject
        console.log(e.toString())
    })


    }
    async doSave(){
        //用法1
        AsyncStorage.setItem('key','value',error => {
           error && console.log(error.toString());
        });

        AsyncStorage.setItem('key','value')
            .catch(error=>{
                error && console.log(error.toString());
            });
        try{
            await AsyncStorage.setItem('key','value');
        }catch (error) {
            error && console.log(error.toString());
        }

        AsyncStorage.getItem('key',(error,value)=>{
            console.log(value);
            error && console.log(error.toString());
        });

        AsyncStorage.getItem('key')
            .then(value=>{
                console.log(value)
            })
            .catch(error=>{
                error && console.log(error.toString());
            });

        try{
            const value = await AsyncStorage.getItem('key');
            console.log(value);
        }catch (error) {
            error && console.log(error.toString());
        }

AsyncStorage.removeItem('key',error=>{
    error && console.log(error.toString());
});

AsyncStorage.removeItem('key').catch(error=>{
    error && console.log(error.toString());
})

try{
    await AsyncStorage.removeItem('key')
}catch (error) {
    error && console.log(error.toString());
}

       // mergeItem()

    }
    render() {
        const {navigation} = this.props;
        console.log('TrendingPage:render',this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.text}>TrendingPage</Text>
                <Button title={'修改theme'} onPress={()=>{
                    this.props.onThemeChange('blue');
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
const mapStateToProps = (state)=>{
    return {

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onThemeChange: (theme)=>dispatch(actions.onThemeChange(theme))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TrendingPage);
//export default TrendingPage;
