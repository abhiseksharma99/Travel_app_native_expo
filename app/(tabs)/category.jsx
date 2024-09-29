import { View, Text, Image, ScrollView } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import CategoryData from '../../data/categories.json';

const Category = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView showsVerticalScrollIndicator={false}>
      <View className='flex-1 mt-10'>
        <Text className='font-bold text-black text-2xl text-center py-5'>
          Select Country 
        </Text>
        <View className='flex-row flex-wrap justify-center mr-2 py-5'>
          {CategoryData.map((category) => (
            <View key={category.id} className='my-2 relative'>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={{
                    uri: category.image,
                  }}
                  className='w-[150px] h-[80px] ml-4'
                />
                <View
                  className='absolute w-[150px] h-[80px] left-4 font-extrabold w-[90%]'
                  style={{ backgroundColor: 'rgba(16,16,13,0.5)' }}
                >
                  <Text className='text-center mt-6 text-white font-extrabold'>
                    {category.name}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      </ScrollView>
    </>
  );
};

export default Category;
