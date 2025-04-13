import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const styles = {
    button: 'w-full p-4 rounded-full border border-gray-300 shadow-sm flex-row items-center justify-center mb-4',
    activeButton: 'bg-[#E27839] border-[#7f3506] w-full p-4 rounded-full shadow-sm flex-row items-center justify-center mb-4',
    buttonText: 'text-black',
    activeButtonText: 'text-white tracking-wider font-bold',
}

export default function UserIntent() {
    const [selectedIntent, setSelectedIntent] = React.useState('both');

    return (
        <SafeAreaView className='flex-1 bg-white px-4'>
            {/* Back button */}
            <View className='flex-row items-center pt-4'>
                <Ionicons name="chevron-back" size={24} color="black" />
            </View>

            <Text className='text-3xl font-bold mt-10 text-center'>Do you want to do</Text>

            {/* Options - Referral Exchange, Mock Interview, Both */}
            <View className='justify-between mt-10 w-full'>
                <TouchableOpacity className={selectedIntent == 'ref-exchange' ? styles.activeButton : styles.button} onPress={() => setSelectedIntent('ref-exchange')}>
                    <Text className={selectedIntent == 'ref-exchange' ? styles.activeButtonText : styles.buttonText}>Referral Exchange</Text>
                </TouchableOpacity>
                <TouchableOpacity className={selectedIntent == 'mock-interview' ? styles.activeButton : styles.button} onPress={() => setSelectedIntent('mock-interview')}>
                    <Text className={selectedIntent == 'mock-interview' ? styles.activeButtonText : styles.buttonText}>Mock Interview</Text>
                </TouchableOpacity>
                <TouchableOpacity className={selectedIntent == 'both' ? styles.activeButton : styles.button} onPress={() => setSelectedIntent('both')}>
                    <Text className={selectedIntent == 'both' ? styles.activeButtonText : styles.buttonText}>Both</Text>
                </TouchableOpacity>
            </View>

            {/* Continue button */}
            <TouchableOpacity className='bg-[#2934D0] w-full h-14 rounded-full items-center justify-center mt-10' onPress={() => {
                router.replace('/(tabs)')
            }}>
                <Text className='text-white text-lg font-bold'>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}