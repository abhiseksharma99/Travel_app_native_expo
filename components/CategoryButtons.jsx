import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import destinationCategories from '../data/categories';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';

const CategoryButtons = ({ onCategoryChanged }) => {
  const scrollRef = useRef(null);
  const itemRef = useRef([]); 
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelectCategory = (index) => {
    const selected = itemRef.current[index];
    setActiveIndex(index);

    // Scroll the selected item into view
    selected?.measureLayout(
      scrollRef.current,
      (x) => {
        scrollRef.current?.scrollTo({ x, y: 0, animated: true });
      },
      (error) => console.log(error)
    );

    // Trigger the category change callback
    onCategoryChanged(destinationCategories[index].title);
  };

  return (
    <View>
      <Text className="text-black text-xl font-bold">Categories</Text>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-4 py-2 mb-2"
      >
        {destinationCategories.map((item, index) => (
          <TouchableOpacity
            key={index}
            ref={(el) => (itemRef.current[index] = el)}
            onPress={() => handleSelectCategory(index)}
            className={`flex-row items-center px-4 py-2 rounded-lg shadow-lg shadow-gray-600 ${
              activeIndex === index ? 'bg-[#ff7f36]' : 'bg-white'
            }`}
          >
            <MaterialCommunityIcons 
              name={item.iconName} 
              size={20} 
              color={activeIndex === index ? Colors.white : Colors.black} 
            />
            <Text className={activeIndex === index ? 'text-white ml-2' : 'text-black ml-2'}>
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoryButtons;

