import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const GroupListings = ({groupData}) => {

const renderItem = ({item}) => {
    return(
       <View className='bg-white p-2 rounded-xl mr-5 flex-row items-center gap-2'>
         <Image source={{uri: item.image}} className='w-[80px] h-[100px] rounded-lg' />
         <View>
            <Text className='text-black text-md font-semibold mb-2'>{item.name}</Text>
            <View className='flex-row items-center'>
             <Ionicons name='star' size={20} color='#ff7f36' />
             <Text className='font-bold ml-1'>{item.rating}</Text>
             <Text className='ml-2 text-gray-400'>({item.reviews})</Text>
            </View>
         </View>
       </View>
    )
}

  return (
    <View className='my-5'>
      <Text className='text-xl font-bold text-black mb-3'>Top Travel Groups</Text>
      <FlatList data={groupData} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  )
}

export default GroupListings