import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { TouchableOpacity, Image, View, Text, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements';
import CategoryButtons from '../../components/CategoryButtons';
import Listings from '../../components/Listings';
import listingData from '../../data/destinations.json';
import groupData from '../../data/groups.json';
import GroupListings from '../../components/GroupListings';

const index = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState('All');

  const onCatChanged = (category) => {
    console.log('Selected Category:', category);
    setCategory(category);
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}}>
              <Image
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2rYr8ls8iXC84TxcucflJXLuQti5KeH5N-rAn7Z4yUP-NfuQtgkdihkVSQEte0fSvzEk&usqp=CAU',
                }}
                className="w-10 h-10 rounded-full ml-4"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              className="bg-white mr-4 p-2 rounded-lg shadow-xl shadow-gray-600"
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={{ paddingTop: headerHeight }} className="px-4 flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-3xl font-extrabold">Explore the beautiful things</Text>
        <View className="flex-row justify-between items-center px-2 py-2 mt-2">
          <View className="flex-row items-center gap-1 bg-white py-1 rounded-lg">
            <Ionicons name="search" size={20} />
            <TextInput
              className="w-52 py-1 px-1 rounded-lg"
              placeholder="Search..."
            />
          </View>
          <TouchableOpacity
            onPress={() => {}}
            style={{ backgroundColor: Colors.primaryColor }}
            className="p-2 rounded-lg"
          >
            <Ionicons name="options" size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
        <CategoryButtons onCategoryChanged={onCatChanged} />
        <Listings listings={listingData} category={category} />
        <GroupListings groupData={groupData} />
       </ScrollView>
      </View>
    </>
  );
};

export default index;

