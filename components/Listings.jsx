import { View, Text, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

const Listings = ({listings,category}) => {

    const [loading,setLoading] = useState(false);

    useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
        setLoading(false)
    },200);
    },[category]);

 const renderItems = ({item}) => {
    return(
        <Link href={`/listing/${item.id}`} asChild >
        <TouchableOpacity>
            <View className='bg-white p-3 rounded-lg mr-5 w-[220px]'>
            <Image source={{uri: item.image}} className='w-[200px] h-[200px] rounded-lg mb-7' />
            <View className='absolute right-5 bottom-20 bg-[#ff7f36] p-2 rounded-full border-2 border-white'>
                <Ionicons name='bookmark-outline' size={20} color='white' />
            </View>
            <Text numberOfLines={1} ellipsizeMode='tail' className='text-lg text-black font-semibold mb-2'>{item.name}</Text>
            <View className='flex-row items-center justify-between'>
             <View className='flex-row items-center gap-1'>
                <FontAwesome5 name='map-marker-alt' size={18} color='#ff7f36' />
                <Text>{item.location}</Text>
             </View>
             <Text className='text-[#ff7f36] font-bold'>${item.price}</Text>
            </View>
            </View>
        </TouchableOpacity>
        </Link>
    )
 }
  return (
    <View>
      <FlatList data={loading?[]:listings} renderItem={renderItems} horizontal showsHorizontalScrollIndicator={false}  />
    </View>
  )
}

export default Listings