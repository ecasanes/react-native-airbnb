import React from 'react';
import {StyleSheet, Text, View, SafeAreaView, TextInput, Platform, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Explore extends React.Component {

    componentWillMount() {

        this.startHeaderHeight = 80;
        if(Platform.OS == 'android'){
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }

    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{height:this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd'   }}>
                        <View style={{flexDirection:'row',padding:10,backgroundColor:'white',marginHorizontal:20,shadowOffset:{width:0,height:0},shadowColor:'black',shadowOpacity:0.2,elevation:1, marginTop:Platform.OS==='android'?35:null}}>
                            <Icon name="ios-search" size={20} />
                            <TextInput
                                
                                underlineColorAndroid="transparent"
                                placeholder="Try Philippines"
                                placeholderTextColor="grey"
                                style={{flex:1, fontWeight: '700', backgroundColor:'white', marginLeft:10}}></TextInput>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
