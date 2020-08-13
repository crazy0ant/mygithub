import React from 'react';
import { View, StyleSheet,Text } from 'react-native';


class PopularPage extends React.Component{

    render() {
        return (
            <View style={styles.container}>
                <Text>PopularPage</Text>

            </View>
        );
    }
}
function PopularTab(){
    return(
        <View>
            <Text>PupularTab</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 30
    },
    welcome:{
        fontSize: 20,
        textAlign: 'center'
    }
})
export default PopularPage;
