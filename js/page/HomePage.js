import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import FavoritePage from "./FavoritePage";
import PopularPage from "./PopularPage";
import TrendingPage from "./TrendingPage";
import MyPage from "./MyPage";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

class HomePage extends React.Component{

    render() {
        return (
            <View>
                <Text>HomePage</Text>
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
export default HomePage;