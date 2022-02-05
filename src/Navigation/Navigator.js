import React, {createContext, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import PostList from '../screens/Postlists'
import PostDetail from '../screens/PostDetail';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'green' },
                headerBackTitleVisible:false
            }}
        >
            <Stack.Screen name="HomeScreen" 
                component={HomeScreen} 
                options={{
                    title: 'Zemoga',
                }}
            />
            <Stack.Screen name="PostList" 
                component={PostList} 
                options={{
                    title: 'Posts',
                }}    
            />
            <Stack.Screen name="PostDetail" 
                component={PostDetail} 
                options={{
                    title: 'Post',
                }}    
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
