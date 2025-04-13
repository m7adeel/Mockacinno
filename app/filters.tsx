import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const FilterScreen = () => {
  const [distance, setDistance] = useState(1);

  const roles = ['UI/UX Designer', 'Animator', 'Front-End Developer'];
  const preferences = ['Referral Exchange', 'Mock Interview'];
  const cities = ['Tokyo'];

  const Tag = ({ label, color = 'bg-purple-700', textColor = 'text-white' }) => (
    <View className={`flex-row items-center px-3 py-1 rounded-full mr-2 mb-2 ${color}`}>
      <Text className={`text-xs ${textColor}`}>{label}</Text>
      <Ionicons name='close-circle-outline' size={14} color="#fff" className="ml-1" />
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4 pb-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name='chevron-back' size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold ml-4">Filter</Text>
      </View>

      <ScrollView className="px-4">
        <Text className="text-sm text-blue-700 font-semibold mb-2">Role</Text>
        <View className="border border-gray-200 rounded-2xl p-3 flex-row flex-wrap items-center">
          {roles.map(role => (
            <Tag key={role} label={role} />
          ))}
          <Ionicons name='chevron-down' size={20} color="gray" className="ml-auto" />
        </View>

        <Text className="text-sm text-blue-700 font-semibold mt-6 mb-2">Interview Preference</Text>
        <View className="border border-gray-200 rounded-2xl p-3 flex-row flex-wrap items-center">
          {preferences.map(pref => (
            <Tag key={pref} label={pref} color="bg-orange-500" />
          ))}
          <Ionicons name='chevron-down' size={20} color="gray" className="ml-auto" />
        </View>

        <Text className="text-sm text-blue-700 font-semibold mt-6 mb-2">Search Distance</Text>
        <View className="bg-gray-100 h-10 rounded-full justify-center px-4">
          <Slider
            style={{ width: '100%' }}
            minimumValue={1}
            maximumValue={100}
            value={distance}
            onValueChange={setDistance}
            minimumTrackTintColor="#0000FF"
            maximumTrackTintColor="#ccc"
            thumbTintColor="#0000FF"
          />
        </View>
        <Text className="text-right text-xs text-gray-500 mt-1">{distance.toFixed(0)}mi.</Text>

        <Text className="text-sm text-blue-700 font-semibold mt-6 mb-2">City</Text>
        <View className="border border-gray-200 rounded-2xl p-3 flex-row flex-wrap items-center">
          {cities.map(city => (
            <Tag key={city} label={city} color="bg-orange-500" />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FilterScreen;
