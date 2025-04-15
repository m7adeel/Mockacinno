import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { FontAwesome, Feather, MaterialIcons } from '@expo/vector-icons';

interface Profile {
  name: string;
  surname: string;
  age: number;
  role: string;
  target: string;
  location: string;
  quote: string;
  imageUrl: string;
  tags: string[];
}

export default function ProfileCard({ profile }: { profile: Profile }) {
  return (
    <View className="bg-black rounded-2xl overflow-hidden shadow-lg w-[320px] mx-2">
      <Image
        source={{ uri: profile.imageUrl }}
        className="w-full h-72"
      />
      <View className="p-4">
        <View className="flex-row items-center mb-1">
          <Text className="text-white text-lg font-bold">{profile.name}</Text>
          <Text className="text-white text-lg ml-1">{profile.surname}</Text>
          <Text className="text-white text-lg ml-auto">{profile.age}</Text>
        </View>

        <Text className="text-white text-sm">
          <Text className="font-bold">Current Role: </Text>{profile.role}
        </Text>
        <Text className="text-white text-sm">
          <Text className="font-bold">Target Role: </Text>{profile.target}
        </Text>
        <Text className="text-white text-sm mb-2">
          <Text className="font-bold">Location: </Text>{profile.location}
        </Text>

        <View className="flex-row gap-2 mb-2 flex-wrap">
          {profile.tags.map((tag, idx) => (
            <Text key={idx} className="bg-orange-300 px-2 py-1 text-sm rounded-full text-black font-medium">{tag}</Text>
          ))}
        </View>

        <Text className="text-white text-sm italic mb-4">{profile.quote}</Text>

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
  );
}
