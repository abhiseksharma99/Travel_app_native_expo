import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import History from '../../data/history.json'

const profile = () => {
  return (
    <>
     <Stack.Screen options={{ headerShown: false }} />
     <ScrollView showsVerticalScrollIndicator={false}>
     <View className='flex-1 mt-10 py-2'>
     <View className='flex-row justify-end mr-4'>
      <View className='bg-red-600 w-24 rounded-lg'>
        <TouchableOpacity onPress={()=>{}} className='flex-row gap-1 justify-center py-2'>
        <MaterialIcons name="logout" size={20} color='white' />
        <Text className='font-bold text-white'>Logout</Text>
        </TouchableOpacity>
      </View>
      </View>
      <View className='grid mt-2 py-1'>
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUx2JzQ6PrAImdUcQWFydMhD_gdv4cNVZggw&s',}} className="w-16 h-16 rounded-full ml-4 m-auto"/>
      <Text className='text-center font-semibold py-1'>Nick mcGregour</Text>
      </View>
      <View className='flex-row justify-center py-2'>
      <TouchableOpacity onPress={()=>{}} className='bg-white w-24 p-2 rounded-lg'>
       <Text className='font-bold text-center'>Edit Profile</Text>
      </TouchableOpacity>
      </View>
      <View className='mt-2 py-2'>
          <View className='flex-row items-center justify-start gap-1 px-5 py-2'>
          <MaterialCommunityIcons name='history' size={20} color='gray' />
          <Text className='text-gray-400 font-bold'>History</Text>
          </View>
          <View className='flex-row flex-wrap justify-center gap-5'>
            {
              History.map((posts)=>(
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
     </View>
     </ScrollView>
    </>
  )
}

export default profile