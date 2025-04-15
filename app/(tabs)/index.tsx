// app/index.tsx
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import React from 'react';
import { router } from 'expo-router';
import AppLogo from '~/assets/app_logo.png';
import ProfileCard from '~/components/ProfileCard';

const profiles = [
    {
      name: 'Edward',
      surname: 'Kenway',
      age: 25,
      role: 'Animator',
      target: 'UI/UX Designer',
      location: 'Chicago',
      quote: '“Let’s work together to create a seamless user experience using tools such as Figma/FigJam, Miro, Adobe XD, and Trello.”',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Referral Exchange', 'Mock Interview']
    },
    {
      name: 'Lara',
      surname: 'Croft',
      age: 29,
      role: 'Game Designer',
      target: 'Product Manager',
      location: 'San Francisco',
      quote: '“Exploring possibilities is my thing — let’s build engaging experiences together.”',
      imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80',
      tags: ['Career Advice']
    },
    {
      name: 'Marcus',
      surname: 'Reed',
      age: 31,
      role: 'Backend Developer',
      target: 'Tech Lead',
      location: 'New York',
      quote: '“System architecture is not just about code—it’s about strategy.”',
      imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Tech Talk', 'Mentorship']
    },
    {
      name: 'Chloe',
      surname: 'Nguyen',
      age: 27,
      role: 'Data Analyst',
      target: 'Machine Learning Engineer',
      location: 'Seattle',
      quote: '“From insights to impact — data is the new oil, and I’m refining it.”',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Mock Interview', 'Portfolio Review']
    },
    {
      name: 'Samir',
      surname: 'Patel',
      age: 34,
      role: 'Technical Writer',
      target: 'Developer Advocate',
      location: 'Austin',
      quote: '“I believe great docs can be as powerful as great code.”',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Public Speaking', 'Networking']
    }
  ];
  

export default function Home() {
  return (
    <View className="flex-1 bg-white px-4 pt-6 pb-2">
      {/* Top Nav */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity className="w-10 h-10 bg-orange-500 rounded-lg justify-center items-center" onPress={() => router.push('/filters')}>
          <Ionicons name="options-outline" size={20} color="white" />
        </TouchableOpacity>
        <View className='flex flex-row items-center'>
          <Image source={AppLogo} className="w-7 h-7 mr-2" />
          <Text className="text-black font-bold text-lg">Mockaccino</Text>
        </View>
        <TouchableOpacity className="relative" onPress={() => router.push('/notifications')}>
          <Feather name="bell" size={24} color="black" />
          <View className="absolute top-[-4] right-[-4] bg-red-500 rounded-full w-4 h-4 justify-center items-center">
            <Text className="text-white text-[10px] font-bold">3</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Horizontal Swipeable Cards */}
        <FlatList
            data={profiles}
            keyExtractor={(_, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ProfileCard profile={item} />}
        />
    </View>
  );
}
