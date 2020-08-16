import React from 'react';
import {View, Text, TextInput} from 'react-native';
import DataStore from "../expand/dao/DataStore";


class DataStoreDemoPage extends React.Component{

    constructor(props) {
        super(props);
        this.dataStore = new DataStore();
        this.state={
            showText:''
        }
    }

    render() {
        return (
            <View>
                <Text>离线缓存框架</Text>
                <TextInput
                    onChangeText={text=>{this.value=text}}
                />
                <Text
                    onPress={()=>{this.loadData()}}
                >获取</Text>
                <Text>{this.state.showText}</Text>
            </View>
        );
    }
    loadData(){
        let url = `https://api.github.com/search/repositories?q=${this.value}`;
        this.dataStore.fetchData(url)
            .then(data=>{
                let showData = `初次加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`
                this.setState({
                    showText: showData
                })
            }).catch(error=>{
                error && console.error(error.toString())
        })
    }
}

export default DataStoreDemoPage;
