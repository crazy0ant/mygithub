import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import actions from "../action";
import {connect} from "react-redux";


class MyPage extends React.Component{

    render() {
        const {navigation} = this.props;
        console.log('MyPage:render',this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.text}>MyPage</Text>
                <Button title={'修改theme'} onPress={()=>{
                    this.props.onThemeChange('#f00');
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

const mapStateToProps = (state)=>{
    return {

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        onThemeChange: (theme)=>dispatch(actions.onThemeChange(theme))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MyPage);
