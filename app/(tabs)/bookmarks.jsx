import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import BookMarkData from '../../data/bookmarks.json'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const bookmarks = () => {
  return (
    <>
     <Stack.Screen options={{ headerShown: false }} />
     <ScrollView showsVerticalScrollIndicator={false}>
    <View className='flex-1 mt-10 pb-6'>
      <Text className='text-center font-bold text-xl py-2'>Bookmarks</Text>
      <View className='flex-row flex-wrap justify-center mr-2 py-5'>
          {BookMarkData.map((category) => (
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
              <View className='absolute right-0 top-1'>
              <Ionicons name='bookmark' size={20} color='white' />
              </View>
            </View>
          ))}
        </View>
    </View>
    </ScrollView>
    </>
  )
}

export default bookmarks