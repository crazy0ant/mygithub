import React from 'react';
import { View, StyleSheet,Text, Button } from 'react-native';
import {connect} from 'react-redux';
import actions from '../action/index'
class TrendingPage extends React.Component{

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

const mapDispatchToProps = (dispatch)=>{
    return {
        onThemeChange: (theme)=>dispatch(actions.onThemeChange(theme))
    }
}

export default connect(null,mapDispatchToProps)(TrendingPage);
//export default TrendingPage;
