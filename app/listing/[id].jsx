import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import listingData from '../../data/destinations.json';
import { TouchableOpacity } from 'react-native';
import { Feather, FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Animated, { interpolate, useAnimatedScrollHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const { width } = Dimensions.get('window');
const IMG_HEIGHT = 300;

const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  const listing = listingData.find((item) => item.id === id);
  const router = useRouter();

  const scrollY = useSharedValue(0); // Shared value for scroll position

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y; // Update scroll position
    },
  });

  // Adjusted animation for stretching on scroll down
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, IMG_HEIGHT], // Reacts when scrolling down (0 to IMG_HEIGHT)
      [0, IMG_HEIGHT * 0.3] // Image moves down slightly
    );

    const scale = interpolate(
      scrollY.value,
      [0, IMG_HEIGHT], // Reacts when scrolling down (0 to IMG_HEIGHT)
      [1, 1.3] // Image zooms in when scrolling down
    );

    return {
      transform: [
        { translateY },
        { scale },
      ],
    };
  });

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <View className='bg-white p-2 rounded-lg'>
                <Feather name='arrow-left' size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}}>
              <View className='bg-white p-2 rounded-lg'>
                <Ionicons name='bookmark-outline' size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View className='flex-1'>
        <Animated.ScrollView
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: 300 }}
        >
          <Animated.Image
            source={{ uri: listing.image }}
            style={[{ width: width, height: IMG_HEIGHT }, imageAnimatedStyle]} // Apply animated styles
          />
          <View className='p-5 bg-white'>
            <Text className='text-xl text-black font-bold'>{listing.name}</Text>
            <View className='flex-row gap-1 py-1'>
              <FontAwesome5 name='map-marker-alt' size={18} color='#ff7f36' />
              <Text className='text-gray-400'>{listing.location}</Text>
            </View>
            <View className='my-5 flex-row justify-between'>
              <View className='flex-row'>
                <View className='bg-gray-200 px-2 py-1 rounded-lg mr-2 items-center flex-row'>
                  <Ionicons size={18} name='time' color='#ff7f36' />
                </View>
                <View>
                  <Text className='text-gray-400'>Duration</Text>
                  <Text className='font-bold'>{listing.duration} days</Text>
                </View>
              </View>
              <View className='flex-row'>
                <View className='bg-gray-200 px-2 py-1 rounded-lg mr-2 items-center flex-row'>
                  <FontAwesome size={18} name='users' color='#ff7f36' />
                </View>
                <View>
                  <Text className='text-gray-400'>Person</Text>
                  <Text className='font-bold'>{listing.duration} days</Text>
                </View>
              </View>
              <View className='flex-row'>
                <View className='bg-gray-200 px-2 py-1 rounded-lg mr-2 items-center flex-row'>
                  <Ionicons size={18} name='star' color='#ff7f36' />
                </View>
                <View>
                  <Text className='text-gray-400'>Rating</Text>
                  <Text className='font-bold'>{listing.rating}</Text>
                </View>
              </View>
            </View>
            <Text className='text-gray-400 leading-6 tracking-wide'>
              {listing.description}
            </Text>
          </View>
        </Animated.ScrollView>
      </View>

      <View className='flex-row justify-around py-5'>
        <TouchableOpacity onPress={() => {}} className='bg-[#ff7f36] p-3 rounded-lg w-[180px]'>
          <Text className='text-white font-bold text-lg text-center'>Book Now</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} className='bg-black p-3 rounded-lg w-[100px]'>
          <Text className='text-white text-lg text-center'>${listing.price}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ListingDetails;

