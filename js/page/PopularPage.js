import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer, NavigationContainer} from 'react-navigation'
import NavigatorUtil from "../navigator/NavigatorUtil";


class PopularPage extends React.Component{

    constructor(props) {
        super(props);
        this.tabNames=['Java','Android','IOS','React','React Native']
    }

    _genTabs(){
        const tabs = {};
        this.tabNames.forEach((item,index)=>{
            tabs[`tab${index}`] = {
                //这里取出的props是什么鬼
                screen: props=><PopularTab {...this.props} tabLable={item}/>,
                navigationOptions:{
                    title: item
                }
            }
        });
        return tabs;
    }
    render() {
        const TabNavigator = createAppContainer(
            createMaterialTopTabNavigator(
                this._genTabs(),
                {
                    tabBarOptions:{
                        tabStyle: styles.tabStyle,
                        upperCaseLabel: false,
                        scrollEnabled: true,
                        style:{
                            backgroundColor: '#a67'
                        },
                        indicatorStyle: styles.indicatorStyle,
                        labelStyle: styles.labelStyle
                    }
                }
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
            <Text
                onPress={()=>{
                    NavigatorUtil.goPage({},"DetailPage");
                }}
            >跳转到详情页</Text>
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
    },
    tabStyle:{
        minWidth: 50,
    },
    indicatorStyle:{
        height: 2,
        color: '#fff'
    },
    labelStyle:{
        fontSize: 13,
        marginTop: 6,
        marginBottom: 6
    }
})
export default PopularPage;
