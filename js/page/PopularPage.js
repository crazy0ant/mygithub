import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer, NavigationContainer} from 'react-navigation'


class PopularPage extends React.Component{

    render() {
        const TabNavigator = createAppContainer(
            createMaterialTopTabNavigator(
                {
                    PopularTab1:{
                        screen: PopularTab,
                    },
                    PopularTab2:{
                        screen: PopularTab,
                    }
                },
                {}
            )
        )

        return (
            <View style={styles.container}>
                <TabNavigator/>

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
