import React, {Component} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class WelcomePage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>WelcomePage</Text>
                <FontAwesome5
                    name={'microphone'}
                    size={30}
                />
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


