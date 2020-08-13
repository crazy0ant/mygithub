import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';

class WelcomePage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>WelcomePage</Text>
            </View>
        );
    }
    componentDidMount() {
        this.timer = setTimeout(()=>{

        },1000)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default WelcomePage;


