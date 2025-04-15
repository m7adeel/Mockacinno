import { View, Text, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ProfileScreen() {
    return (
        <ScrollView className="flex-1 bg-white">
            {/* Header */}
            <View className="bg-indigo-500 pt-12 pb-16 px-4 rounded-b-3xl relative">
                <TouchableOpacity className="absolute top-14 right-4 z-10" onPress={() => {
                    router.push('/edit_profile')
                }}>
                    <Ionicons
                        name="settings-sharp"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
                <View className="items-center">
                    <Text className="text-white text-lg font-bold">Connor Kenway</Text>
                    <Text className="text-white text-sm">📍 London, UK</Text>
                    <View className="mt-4 w-28 h-28 rounded-full border-4 border-white overflow-hidden">
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                            className="w-full h-full"
                        />
                    </View>
                </View>
            </View>

            {/* Info Box */}
            <View className="flex-row justify-between px-6 py-4 bg-white mx-6 rounded-xl shadow-sm mt-[-24px] border border-gray-200">
                <View>
                    <Text className="font-bold text-sm text-black">Current Role</Text>
                    <Text className="text-sm text-black">Animator</Text>
                </View>
                <View>
                    <Text className="font-bold text-sm text-black">Aspiring</Text>
                    <Text className="text-sm text-black">UI/UX Designer</Text>
                </View>
            </View>

            {/* Bio */}
            <View className="px-6 mt-6">
                <Text className="font-bold text-blue-800 mb-1">Bio</Text>
                <Text className="text-sm text-gray-700 leading-relaxed">
                    “Let’s work together to create a seamless user experience using tools such as Figma/FigJam, Miro, Adobe XD, and Trello.”
                </Text>
            </View>

            {/* Wants to do */}
            <View className="px-6 mt-6">
                <Text className="font-bold text-blue-800 mb-2">Wants to do</Text>
                <View className="flex-row gap-2 flex-wrap">
                    <Text className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full font-medium text-sm">
                        Referral Exchange
                    </Text>
                    <Text className="bg-orange-400 text-white px-3 py-1 rounded-full font-medium text-sm">
                        Mock Interview
                    </Text>
                </View>
            </View>

            {/* Skills */}
            <View className="px-6 mt-6">
                <Text className="font-bold text-blue-800 mb-2">Skills</Text>
                <View className="flex-row gap-2 flex-wrap">
                    <Text className="bg-purple-700 text-white px-3 py-1 rounded-full font-semibold text-sm">
                        UI/UX Design
                    </Text>
                    <Text className="bg-purple-700 text-white px-3 py-1 rounded-full font-semibold text-sm">
                        Prototyping
                    </Text>
                    <Text className="bg-purple-700 text-white px-3 py-1 rounded-full font-semibold text-sm">
                        Video Editing & Multimedia Arts
                    </Text>
                </View>
            </View>

            {/* Availability */}
            <View className="px-6 mt-6">
                <Text className="font-bold text-blue-800 mb-1">Availability Schedule</Text>
                <Text className="text-sm text-gray-700">Mondays to Fridays 9am - 5pm PST</Text>
            </View>

            {/* Premium Button */}
            <View className="px-6 mt-8 mb-6">
                <Pressable className="bg-indigo-600 rounded-full py-3 items-center shadow-lg flex-row justify-center space-x-2">
                    <Text className="text-yellow-300 font-bold">👑</Text>
                    <Text className="text-white font-bold text-base">Try Premium</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
}
