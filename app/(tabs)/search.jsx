import { View, Text, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Stack } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { Image } from 'react-native'
import Popular from '../../data/popularDestinations.json'
import Trending from '../../data/trending.json'

const search = () => {

  return (
    <>
     <Stack.Screen options={{ headerShown: false }} />
    <View className='flex-1 mt-10 px-6 pb-6'>
    <ScrollView showsVerticalScrollIndicator={false}>
       <Text className='text-center text-xl text-black font-semibold py-4'>Search Destinations ...</Text>
      <View className="flex-row items-center gap-1 bg-white py-1 px-2 rounded-lg">
            <Ionicons name="search" size={20} />
            <TextInput
              className="w-52 py-1 px-1 rounded-lg"
              placeholder="Search..."
            />
        </View>
        <View className='mt-5'>
          <Text className='text-gray-500 font-bold'>recent searches</Text>
          <View className='my-2 relative w-[250px]'>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={{
                    uri: 'https://i.natgeofe.com/n/f01fa8fc-d26a-4da1-8704-c73b789aabbd/santorini_AWL_GRE1919AW_HR_2x1.jpg',
                  }}
                  className='w-[250px] h-[90px]'
                />
                <View
                  className='absolute w-[250px] h-[90px] font-extrabold'
                  style={{ backgroundColor: 'rgba(16,16,13,0.5)' }}
                >
                  <Text className='text-center mt-7 text-white font-extrabold'>
                    Santorini Island
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          <View className='my-2 relative w-[250px]'>
              <TouchableOpacity onPress={() => {}}>
                <Image
                  source={{
                    uri: 'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/56000/56828-Dubai.jpg',
                  }}
                  className='w-[250px] h-[90px]'
                />
                <View
                  className='absolute w-[250px] h-[90px] font-extrabold'
                  style={{ backgroundColor: 'rgba(16,16,13,0.5)' }}
                >
                  <Text className='text-center mt-7 text-white font-extrabold'>
                    Dubai
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
        <View className='mt-5'>
          <Text className='text-[#ff7f36] font-bold py-2'>Popular destinations </Text>
          <View className='flex-row flex-wrap justify-center gap-2'>
            {
              Popular.map((posts)=>(
                <View key={posts.id} className='relative w-[150px]'>
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    source={{
                      uri: posts.image,
                    }}
                    className='w-[150px] h-[90px]'
                  />
                  <View
                    className='absolute w-[150px] h-[90px] font-extrabold'
                    style={{ backgroundColor: 'rgba(16,16,13,0.5)' }}
                  >
                    <Text className='text-center mt-7 text-white font-extrabold'>
                      {posts.name}
                    </Text>
                  </View>
                </TouchableOpacity>
             </View>
              ))
            }
          </View>
        </View>
        <View className='mt-5'>
          <Text className='text-[#ff7f36] font-bold py-2'>Trending this week  </Text>
          <View className='flex-row flex-wrap justify-center gap-2'>
            {
              Trending.map((trendingposts)=>(
                <View key={trendingposts.id} className='relative w-[150px]'>
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    source={{
                      uri: trendingposts.image,
                    }}
                    className='w-[150px] h-[90px]'
                  />
                  <View
                    className='absolute w-[150px] h-[90px] font-extrabold'
                    style={{ backgroundColor: 'rgba(16,16,13,0.5)' }}
                  >
                    <Text className='text-center mt-7 text-white font-extrabold'>
                      {trendingposts.name}
                    </Text>
                  </View>
                </TouchableOpacity>
             </View>
              ))
            }
          </View>
        </View>
       </ScrollView>
    </View>
    </>
  )
}

export default search

