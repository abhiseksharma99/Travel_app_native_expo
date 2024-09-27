import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Colors from '../../constants/Colors';
import { View } from 'react-native';

const _layout = () => {
  return (
    <Tabs
    screenOptions={{
      tabBarStyle: {
        backgroundColor: Colors.bgColor,
        borderTopWidth: 0,
        padding: 0,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.black,
      tabBarInactiveTintColor: "#999",
    }}
    >
      <Tabs.Screen name='index' options={{tabBarIcon: ({color}) => (
        <Entypo name='compass' size={28} color={color} />
      )}} />
      <Tabs.Screen name='category' options={{tabBarIcon: ({color}) => (
        <MaterialIcons name='space-dashboard' size={28} color={color} />
      )}} />
      <Tabs.Screen name='search' options={{tabBarIcon: ({color}) => (
        <View style={{backgroundColor:Colors.primaryColor}} className='px-4 py-3 rounded-lg h-12' >
           <AntDesign name='search1' size={24} color={Colors.white} />
        </View>
      )}} />
      <Tabs.Screen name='bookmarks' options={{tabBarIcon: ({color}) => (
        <Ionicons name='bookmarks-sharp' size={28} color={color} />
      )}} />
      <Tabs.Screen name='profile' options={{tabBarIcon: ({color}) => (
        <FontAwesome5 name='user-circle' size={28} color={color} />
      )}} />
    </Tabs>
  )
}

export default _layout