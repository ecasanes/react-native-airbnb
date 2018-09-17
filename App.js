import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Profile from './screens/Profile';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

let tabs = {
    Explore: {
        screen: Explore,
        navigationOptions:{
            tabBarLabel: 'EXPLORE',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-search-outline" color={tintColor} size={24} />
            )
        }
    },
    Saved: {
        screen: Saved,
        navigationOptions:{
            tabBarLabel: 'SAVED',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-heart-outline" color={tintColor} size={24} />
            )
        }
    },
    Trips: {
        screen: Trips,
        navigationOptions:{
            tabBarLabel: 'TRIPS',
            tabBarIcon: ({tintColor}) => (
                <Image source={require('./assets/airbnb.png')} style={{height:24, width:24, tintColor:tintColor}} />
            )
        }
    },
    Inbox: {
        screen: Inbox,
        navigationOptions:{
            tabBarLabel: 'INBOX',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-checkbox-outline" color={tintColor} size={24} />
            )
        }
    },
    Inbox: {
        screen: Profile,
        navigationOptions:{
            tabBarLabel: 'PROFILE',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-person-outline" color={tintColor} size={24} />
            )
        }
    }
};

export default createBottomTabNavigator(tabs, {
    tabBarOptions: {
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        style: {
            backgroundColor: 'white',
            borderTopWidth: 0,

            // ios-only
            shadowOffset: {width: 5,height: 3},
            shadowColor: 'black',
            shadowOpacity: 0.5,

            // compensate for android
            elevation: 5
        }
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
