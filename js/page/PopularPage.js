import React from 'react';
import { View, StyleSheet,Text,Button,FlatList,RefreshControl } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {createAppContainer, NavigationContainer} from 'react-navigation'
import NavigatorUtil from "../navigator/NavigatorUtil";
import {connect} from 'react-redux';
import actions from "../action";

const URL = `https://api.github.com/search/repositories?q=`;
const QUERY_STR = '&sort=stars';//接口搜索排序规则
const THEME_COLOR = '#f00';
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
                screen: props=><PopularTabPage {...this.props} tabLable={item}/>,
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
class PopularTab extends React.Component{

    constructor(props) {
        super(props);
        const {tabLable} = this.props;
        this.storeName = tabLable;
    }
    loadData(){
        const {onLoadPopularData} = this.props;
        const url = this.genFetchUrl(this.storeName);
        onLoadPopularData(this.storeName,url);
        //debugger;
    }
    componentDidMount() {
        this.loadData();
    }
    genFetchUrl(key){
        return URL+key+QUERY_STR;
    }
    renderItem(data){
        const {item} = data;
        return (
            <View style={{marginBottom: 10}}>
                <Text style={{backgroundColor: '#Faa'}}>
                    {JSON.stringify(item)}
                </Text>
            </View>
        );
    }
    render() {
        const {popular} = this.props;
        let store = popular[this.storeName];//动态获取state
        if(!store){
            store = {
                items:[],
                isLoading:false
            }
        }

        return(
            <View style={styles.container}>
                <FlatList
                    data={store.items}
                    renderItem={data=>this.renderItem(data)}
                    keyExtractor={item=>''+item.id}
                    refreshControl={
                        <RefreshControl
                            title={'Loading'}
                            titleColor={THEME_COLOR}
                            colors={[THEME_COLOR]}
                            refreshing={store.isLoading}
                            onRefresh={()=>this.loadData()}
                            tintColor={THEME_COLOR}
                        />
                    }
                />
            </View>
        );
    }


}
const mapStateToProps = state=>{
    return {
        popular: state.popular
    }
};
const mapDispatchToProps = dispatch =>{
    return{
        onLoadPopularData: (storeName, url)=>dispatch(actions.onLoadPopularData(storeName, url))
    }
}
const PopularTabPage = connect(mapStateToProps,mapDispatchToProps)(PopularTab);

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
});


export default PopularPage;
