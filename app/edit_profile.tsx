import { View, Text, TextInput, ScrollView, Image, Pressable, SafeAreaView, Touchable, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function EditProfileScreen() {
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
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1603415526960-fb8f6e35dfc7?auto=format&fit=crop&w=800&q=80' }}
                            className="w-28 h-28 rounded-full"
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
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Email</Text>
                        <TextInput
                            className="border border-gray-300 rounded-full px-4 py-2 text-black"
                            placeholder="user@gmail.com"
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Location</Text>
                        <TextInput
                            className="border border-gray-300 rounded-full px-4 py-2 text-black"
                            placeholder="London, UK"
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Bio</Text>
                        <TextInput
                            multiline
                            numberOfLines={4}
                            className="border border-gray-300 rounded-xl px-4 py-2 text-black"
                            placeholder="Tell us about yourself..."
                            defaultValue="Let’s work together to create a seamless user experience using tools such as Figma/FigJam, Miro, Adobe XD, and Trello."
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Current Role</Text>
                        <TextInput
                            className="border border-gray-300 rounded-full px-4 py-2 text-black"
                            placeholder="Animator"
                        />
                    </View>

                    <View>
                        <Text className="text-blue-800 font-bold mb-1">Target Role</Text>
                        <TextInput
                            className="border border-gray-300 rounded-full px-4 py-2 text-black"
                            placeholder="UI/UX Designer"
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
                <Pressable className="mt-8 mb-10 bg-blue-600 py-3 rounded-full items-center justify-center shadow-md">
                    <Text className="text-white font-bold text-base">Save Changes</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}
