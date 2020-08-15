import React from 'react';
import PopularPage from "../page/PopularPage";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TrendingPage from "../page/TrendingPage";
import Ionicons from "react-native-vector-icons/Ionicons";
import FavoritePage from "../page/FavoritePage";
import MyPage from "../page/MyPage";
import Entypo from "react-native-vector-icons/Entypo";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import {connect} from 'react-redux';
//tab常量
const TABS = {
    PopularPage: {
        screen: PopularPage,
        navigationOptions:{
            tabBarLabel: '最热',
            tabBarIcon:({tintColor,focused})=>(
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions:{
            tabBarLabel: '趋势',
            tabBarIcon:({tintColor,focused})=>(
                <Ionicons
                    name={'md-trending-up'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    FavoritePage:{
        screen: FavoritePage,
        navigationOptions:{
            tabBarLabel: '收藏',
            tabBarIcon:({tintColor,focused})=>(
                <MaterialIcons
                    name={'favorite'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    MyPage:{
        screen: MyPage,
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon:({tintColor,focused})=>(
                <Entypo
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    }
}

class DynamicTabNavigator extends React.Component{
    constructor(props) {
        super(props);
    }
    _tabNavigator(){
        if(this.Tabs){
            return this.Tabs;
        }
        const {PopularPage,TrendingPage,FavoritePage,MyPage} = TABS;
        const tabs = {PopularPage,TrendingPage,FavoritePage,MyPage};//服务端下发，控制底部导航数量
        PopularPage.navigationOptions.tabBarLabel = '最热1';//通过这种方式动态修改属性
        return this.Tabs = createAppContainer(
            createBottomTabNavigator(
                {...tabs},
                {
                    tabBarComponent:props=>{
                        return <TabBarComponent {...props} theme={this.props.theme}/>
                    }
                }
            )
        )
    }

    render() {
        console.log('DynamicTabNavigator:render',this.props)
        //通过jsx的语法使用导航器，不能直接return this._tabNavigator();
        const Tab = this._tabNavigator();
        return <Tab/>
    }
}

class TabBarComponent extends React.Component{
    render() {
        console.log('TabBarComponent:render',this.props)
        return <BottomTabBar
            {...this.props }
            activeTintColor={this.props.theme}
        />;
    }
}

const mapStateToProps = (state)=>{
    return {
        theme: state.theme.theme,
    }
}

export default connect(mapStateToProps)(DynamicTabNavigator);
