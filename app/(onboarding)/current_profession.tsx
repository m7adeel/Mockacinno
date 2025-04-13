import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { PROFESSIONS } from '~/content';
import { router } from 'expo-router';

export default function CurrentProfession() {
  const [selectedRoles, setSelectedRoles] = useState(['UI Designer', 'UX Designer']);
  const [search, setSearch] = useState('');

  const toggleRole = (role: string) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles((prev) => prev.filter((r) => r !== role));
    } else {
      setSelectedRoles((prev) => [...prev, role]);
    }
  };

  const filteredRoles = PROFESSIONS.filter((role) =>
    role.toLowerCase().includes(search.toLowerCase())
  );

  const renderRoleButton = (role: string) => {
    const isSelected = selectedRoles.includes(role);
    return (
      <Pressable
        key={role}
        onPress={() => toggleRole(role)}
        className={`flex-row items-center px-4 h-14 my-2 m-1 w-[48%] rounded-full border shadow-sm ${
          isSelected ? 'bg-[#E27839] border-[#7f3506]' : 'bg-white border-gray-300'
        }`}
      >
        <Ionicons
          name={isSelected ? 'checkbox' : 'square-outline'}
          size={18}
          color={isSelected ? 'white' : '#000'}
        />
        <Text className={`ml-2 tracking-wider ${isSelected ? 'text-white' : 'text-black'}`}>
          {role}
        </Text>
      </Pressable>
    );
  };

  return (
    <View className="flex-1 bg-gray-50 pt-14 px-4">
      {/* Header */}
      <View className="flex-row items-center mb-4">
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text className="text-lg font-semibold ml-4">Select your <Text className="font-bold">Current Role</Text></Text>
      </View>

      {/* Search */}
      <View className="flex-row items-center px-4 py-2 rounded-full bg-white shadow mb-10">
        <Ionicons name="search" size={20} color="#9CA3AF" />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
          className="ml-2 flex-1 text-black text-base"
          placeholderTextColor="#9CA3AF"
        />
      </View>

      {/* Role Grid */}
      <ScrollView contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: "space-between", alignItems: 'center' }}>
        {filteredRoles.map(renderRoleButton)}
      </ScrollView>

      {/* Continue Button */}
      <Pressable className="absolute bottom-8 self-center w-[90%] py-4 bg-blue-700 rounded-full shadow-md" onPress={() => { router.push('/(onboarding)/target_profession'); }}>
        <Text className="text-white font-bold text-center text-base">Continue</Text>
      </Pressable>
    </View>
  );
}
