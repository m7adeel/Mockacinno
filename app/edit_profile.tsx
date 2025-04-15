import { View, Text, TextInput, ScrollView, Image, Pressable, SafeAreaView, Touchable, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import useUserStore from '~/store/userStore';
import useAuthStore from '~/store/authStore';

import Animated from 'react-native-reanimated';

export default function EditProfileScreen() {
    const { userData, updateUserData } = useUserStore();
    const { user } = useAuthStore();

    if (!userData) {
        return <View className='flex-1 justify-center'><ActivityIndicator size="large" color="#0000ff" /></View>;
    }

    const [name, setName] = useState(userData.name || "");
    const [location, setLocation] = useState(userData.city || "");
    const [bio, setBio] = useState(userData.bio || "");
    const [currentRole, setCurrentRole] = useState(userData.currentRole || "");
    const [targetRole, setTargetRole] = useState(userData.targetRole || "");

    const [email, setEmail] = useState(user.email)

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row items-center mb-6 px-6">
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
                    <Text className="ml-4 font-bold text-lg text-black">Edit Profile</Text>
                </View>
            <ScrollView className="flex-1 bg-white px-6">
                {/* Profile Image */}
                <View className="items-center mb-6">
                    <View className="relative">
                        <Animated.Image
                            source={{ uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                            className="w-28 h-28 rounded-full"
                            sharedTransitionTag='profileImage-profileScreen'
                        />
                        <Pressable className="absolute bottom-0 right-0 bg-white rounded-full p-2 border border-gray-300">
                            <Feather name="edit-3" size={16} color="black" />
                        </Pressable>
                    </View>
                </View>

                {/* Form Inputs */}
                <View className="space-y-4">
                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Full Name</Text>
                        <TextInput
                            className="border border-gray-300 rounded-full px-4 py-2 text-black"
                            placeholder="Edward Kenway"
                            defaultValue={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Email</Text>
                        <TextInput
                            className="border border-gray-300 rounded-full px-4 py-2 text-black"
                            placeholder="user@gmail.com"
                            defaultValue={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Location</Text>
                        <TextInput
                            className="border border-gray-300 rounded-full px-4 py-2 text-black"
                            placeholder="London, UK"
                            defaultValue={location}
                            onChangeText={setLocation}
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Bio</Text>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            className="border border-gray-300 rounded-xl px-4 py-2 text-black"
                            placeholder="Tell us about yourself..."
                            defaultValue={bio}
                            onChangeText={setBio}
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Current Role</Text>
                        <TextInput
                            className="border border-gray-300 rounded-full px-4 py-2 text-black"
                            placeholder="Animator"
                            defaultValue={currentRole}
                            onChangeText={setCurrentRole}
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Target Role</Text>
                        <TextInput
                            className="border border-gray-300 rounded-full px-4 py-2 text-black"
                            placeholder="UI/UX Designer"
                            defaultValue={targetRole}
                            onChangeText={setTargetRole}
                        />
                    </View>

                    {/* Wants To */}
                    <View>
                        <Text className="text-blue-800 font-bold mb-2">Wants to</Text>
                        <View className="flex-row flex-wrap gap-2 border border-gray-300 rounded-full px-3 py-2 items-center justify-between">
                            <View className="flex-row gap-2 flex-wrap">
                                <Text className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm">Mock Interview ✖️</Text>
                                <Text className="bg-orange-300 text-white px-3 py-1 rounded-full text-sm">Referral Exchange ✖️</Text>
                            </View>
                            <Ionicons name="chevron-down" size={18} color="gray" />
                        </View>
                    </View>

                    {/* Skills */}
                    <View>
                        <Text className="text-blue-800 font-bold mb-2">Skills</Text>
                        <View className="flex-row flex-wrap gap-2 border border-gray-300 rounded-xl px-3 py-2 items-center justify-between">
                            <View className="flex-row gap-2 flex-wrap">
                                <Text className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm">UI/UX Design ✖️</Text>
                                <Text className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm">Prototyping ✖️</Text>
                                <Text className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm">Video Editing & Multimedia Arts ✖️</Text>
                            </View>
                            <Ionicons name="chevron-down" size={18} color="gray" />
                        </View>
                    </View>

                    {/* Schedule */}
                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Availability Schedule</Text>
                        <View className="flex-row justify-between items-center border border-gray-300 rounded-full px-4 py-2">
                            <Text className="text-black">Mondays to Fridays 9am - 5pm PST</Text>
                            <Feather name="calendar" size={18} color="gray" />
                        </View>
                    </View>
                </View>

                {/* Save Button */}
                <Pressable className="mt-8 mb-10 bg-blue-600 py-3 rounded-full items-center justify-center shadow-md" onPress={() => {
                    const updatedData = {
                        ...userData,
                        name,
                        city: location,
                        bio,
                        currentRole,
                        targetRole,
                    };
                    updateUserData(updatedData);
                    router.back();
                }}>
                    <Text className="text-white font-bold text-base">Save Changes</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}
