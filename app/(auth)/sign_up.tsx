import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    ScrollView,
    Image,
    TouchableOpacity,
    Switch,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import useAuthStore from '~/store/authStore';

export default function SignUpScreen() {
    const [secureText, setSecureText] = useState(true);
    const [secureConfirm, setSecureConfirm] = useState(true);
    const [agree, setAgree] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const { signUpWithEmailAndPassword } = useAuthStore();

    return (
        <ScrollView className="flex-1 bg-[#F5F5F5] px-6 pt-12">
            {/* Illustration */}
            <View className="items-center">
                <Image
                    source={require('../../assets/images/sign_up.png')} // Add your illustration here
                    className="w-36 h-36 mt-10"
                    resizeMode="contain"
                />
            </View>

            {/* Title */}
            <Text className="text-3xl font-bold mb-6">Sign-up</Text>

            {/* Profile Image Placeholder */}
            <View className="items-center mb-6">
                <View className="w-28 h-28 rounded-full bg-white shadow items-center justify-center">
                    <Ionicons name="person-outline" size={48} color="#ccc" />
                </View>
                <Text className="text-sm text-[#B6B6B6] mt-2">Select Profile Picture</Text>
            </View>

            {/* Input Fields */}
            <View className="space-y-4">
                <TextInput
                    placeholder="Full Name"
                    value={name}
                    onChangeText={setName}
                    className="bg-white px-4 py-3 rounded-full shadow my-3"
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    className="bg-white px-4 py-3 rounded-full shadow my-3"
                    keyboardType="email-address"
                />
                <TextInput
                    placeholder="City"
                    value={city}
                    onChangeText={setCity}
                    className="bg-white px-4 py-3 rounded-full shadow my-3"
                />
                <View className="my-3">
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={secureText}
                        className="bg-white px-4 py-3 rounded-full shadow pr-10"
                    />
                    <Pressable
                        onPress={() => setSecureText(!secureText)}
                        className="absolute right-4 top-3"
                    >
                        <Ionicons
                            name={secureText ? 'eye-off-outline' : 'eye-outline'}
                            size={20}
                            color="gray"
                        />
                    </Pressable>
                </View>
                <View className="my-3">
                    <TextInput
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        secureTextEntry={secureConfirm}
                        className="bg-white px-4 py-3 rounded-full shadow pr-10"
                    />
                    <Pressable
                        onPress={() => setSecureConfirm(!secureConfirm)}
                        className="absolute right-4 top-3"
                    >
                        <Ionicons
                            name={secureConfirm ? 'eye-off-outline' : 'eye-outline'}
                            size={20}
                            color="gray"
                        />
                    </Pressable>
                </View>
            </View>

            {/* Checkbox */}
            <View className="flex-row items-start mt-6 px-10">
                <TouchableOpacity
                    onPress={() => setAgree(!agree)}
                    className="mt-1"
                >
                    <Ionicons
                        name={agree ? 'checkbox' : 'square-outline'}
                        size={18}
                        color={agree ? 'black' : '#000'}
                    />
                </TouchableOpacity>
                <Text className="text-black ml-2">
                    By signing up, you accept the{' '}
                    <Text className="text-blue-500 underline">Terms of Service</Text> and{' '}
                    <Text className="text-blue-500 underline">Privacy Policy</Text>
                </Text>
            </View>

            {/* Sign-up Button */}
            <Pressable
                onPress={() => {
                    if (!agree) return alert('Please accept the terms first.');

                    if (!email || !password) {
                        return alert('Please fill in all fields.');
                    }

                    if (password !== confirmPassword) {
                        return alert('Passwords do not match.');
                    }

                    signUpWithEmailAndPassword(email, password);

                    // router.push('/(onboarding)/current_profession');
                }}
                className="bg-[#2B32F3] py-4 mt-8 rounded-full items-center shadow"
            >
                <Text className="text-white font-semibold text-base">Sign up</Text>
            </Pressable>

            {/* Already have account */}
            <View className="items-center mt-6 mb-12">
                <Text className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <Text
                        className="text-blue-500"
                        onPress={() => router.replace('/(auth)/sign_in')}
                    >
                        Log in
                    </Text>
                </Text>
            </View>
        </ScrollView>
    );
}
