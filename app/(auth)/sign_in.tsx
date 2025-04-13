import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import  LogInImage from '../../assets/images/sign_in.png';
import AppLogo from '../../assets/app_logo.png';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <SafeAreaView className='flex-1 bg-[#F3F3F3] items-center px-10'>
        <Image source={LogInImage} className='w-36 h-36 my-10' />
        <Text className='text-3xl font-bold w-full'>Login</Text>
        <Image source={AppLogo} className='w-44 h-44 my-5' />
        <View className='w-full'>
            <TextInput 
                placeholder='Email'
                value={email}
                onChangeText={setEmail}
                className='bg-white w-full p-4 rounded-full mt-5'
                placeholderTextColor='#B6B6B6'
            />
        </View>
        <View className='w-full bg-white rounded-full mt-5 flex flex-row items-center p-4'>
            <TextInput 
                placeholder='Password'
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
                className='w-[80%]'
                placeholderTextColor='#B6B6B6'
            />
            <TouchableOpacity className='w-[20%] items-end' onPress={() => setShowPassword(!showPassword)}>
                <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={20} color='#B6B6B6' />
            </TouchableOpacity>
        </View>
        <Text className='text-[#2934D0] w-full text-right font-light mt-5'>Forgot Password?</Text>
        <TouchableOpacity className='bg-[#2934D0] w-full py-3 rounded-full mt-5'>
            <Text className='text-white text-center tracking-widest text-2xl font-bold'>Login</Text>
        </TouchableOpacity>

        <Text className='text-[#B6B6B6] w-full text-center font-light mt-5 absolute bottom-10'>Don't have an account? <Text className='text-[#2934D0]'>Sign Up</Text></Text>
    </SafeAreaView>
  )
}