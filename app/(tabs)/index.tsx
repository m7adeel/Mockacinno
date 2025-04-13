import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { router } from 'expo-router';

import AppLogo from '~/assets/app_logo.png';

export default function Home() {
  return (
    <View className="flex-1 bg-white px-4 pt-6 pb-2">
      {/* Top Nav */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity className="w-10 h-10 bg-orange-500 rounded-lg justify-center items-center" onPress={() => {
            router.push('/filters');
        }}>
          <Ionicons name="options-outline" size={20} color="white" />
        </TouchableOpacity>
        <View className='flex flex-row items-center'>
            <Image source={AppLogo} className="w-7 h-7 mr-2" />
            <Text className="text-black font-bold text-lg">Mockaccino</Text>
        </View>
        <TouchableOpacity className="relative" onPress={() => {
            router.push('/notifications')
        }}>
          <Feather name="bell" size={24} color="black" />
          <View className="absolute top-[-4] right-[-4] bg-red-500 rounded-full w-4 h-4 justify-center items-center">
            <Text className="text-white text-[10px] font-bold">3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Card */}
      <View className="bg-black rounded-2xl overflow-hidden shadow-lg flex-1">
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1603415526960-fb8f6e35dfc7?auto=format&fit=crop&w=800&q=80' }}
          className="w-full h-72"
        />
        <View className="p-4">
          <View className="flex-row items-center mb-1">
            <Text className="text-white text-lg font-bold">Edward</Text>
            <Text className="text-white text-lg ml-1">Kenway</Text>
            <Text className="text-white text-lg ml-auto">25</Text>
          </View>

          <Text className="text-white text-sm">
            <Text className="font-bold">Current Role: </Text>Animator
          </Text>
          <Text className="text-white text-sm">
            <Text className="font-bold">Target Role: </Text>UI/UX Designer
          </Text>
          <Text className="text-white text-sm mb-2">
            <Text className="font-bold">Location: </Text>Chicago
          </Text>

          {/* Tags */}
          <View className="flex-row gap-2 mb-2">
            <Text className="bg-orange-300 px-2 py-1 text-sm rounded-full text-black font-medium">Referral Exchange</Text>
            <Text className="bg-yellow-300 px-2 py-1 text-sm rounded-full text-black font-medium">Mock Interview</Text>
          </View>

          {/* Quote */}
          <Text className="text-white text-sm italic mb-4">
            “Let’s work together to create a seamless user experience using tools such as Figma/FigJam, Miro, Adobe XD, and Trello.”
          </Text>

          {/* Bottom Buttons */}
          <View className="flex-row justify-around">
            <Pressable className="bg-purple-700 w-12 h-12 rounded-full justify-center items-center">
              <FontAwesome name="times" size={24} color="white" />
            </Pressable>
            <Pressable className="bg-gray-300 w-12 h-12 rounded-full justify-center items-center">
              <Feather name="info" size={24} color="black" />
            </Pressable>
            <Pressable className="bg-blue-700 w-12 h-12 rounded-full justify-center items-center">
              <MaterialIcons name="message" size={24} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
